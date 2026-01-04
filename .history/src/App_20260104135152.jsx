import React, { useState, useEffect } from 'react';
import { BookOpen, Moon, Sun, Menu, X, Trophy, Flame, Award, Target } from 'lucide-react';
import { auth, db, signInWithGoogle, signOutUser } from './services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ContentArea from './components/ContentArea';
import LoginScreen from './components/LoginScreen';
import { courseContent } from './data/courseContent.jsx';
import { SplashScreen } from '@capacitor/splash-screen';

const StudyPlanApp = () => {
  const [user, setUser] = useState(null);
  const [isGuest, setIsGuest] = useState(false);
  const [activeDay, setActiveDay] = useState(1);
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [completedSubTasks, setCompletedSubTasks] = useState({});
  const [completedVideos, setCompletedVideos] = useState({});
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [streak, setStreak] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) setIsGuest(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user && db) {
      const unsubDocs = onSnapshot(doc(db, "users", user.uid), (doc) => {
        if (doc.exists()) {
          const data = doc.data();
          if (data.progress) setCompletedSubTasks(data.progress);
          if (data.videos) setCompletedVideos(data.videos);
          if (data.streak) setStreak(data.streak);
          if (data.points) setTotalPoints(data.points);
        }
      });
      return () => unsubDocs();
    } else if (isGuest) {
      const savedProgress = localStorage.getItem("reactCampProgress");
      const savedVideos = localStorage.getItem("reactCampVideos");
      const savedStreak = localStorage.getItem("reactCampStreak");
      const savedPoints = localStorage.getItem("reactCampPoints");
      
      if (savedProgress) setCompletedSubTasks(JSON.parse(savedProgress));
      if (savedVideos) setCompletedVideos(JSON.parse(savedVideos));
      if (savedStreak) setStreak(parseInt(savedStreak));
      if (savedPoints) setTotalPoints(parseInt(savedPoints));
    }
  }, [user, isGuest]);

  useEffect(() => {
    setActiveModuleIndex(0);
    setIsMobileMenuOpen(false);
  }, [activeDay]);

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    }
  };

  const handleGuestAccess = () => {
    setIsGuest(true);
    setLoading(false);
  };

  const handleLogout = async () => {
    if (user) {
      await signOutUser();
    } else {
      setIsGuest(false);
    }
    setCompletedSubTasks({});
    setCompletedVideos({});
    setStreak(0);
    setTotalPoints(0);
  };

  const toggleSubTask = async (dayId, taskId) => {
    const key = `${dayId}-${taskId}`;
    const newState = { ...completedSubTasks, [key]: !completedSubTasks[key] };
    setCompletedSubTasks(newState);

    // Award points
    if (!completedSubTasks[key]) {
      const newPoints = totalPoints + 10;
      setTotalPoints(newPoints);
      
      if (user && db) {
        await setDoc(
          doc(db, "users", user.uid),
          { progress: newState, points: newPoints, lastUpdated: new Date() },
          { merge: true }
        );
      } else {
        localStorage.setItem("reactCampProgress", JSON.stringify(newState));
        localStorage.setItem("reactCampPoints", newPoints.toString());
      }
    } else {
      if (user && db) {
        await setDoc(
          doc(db, "users", user.uid),
          { progress: newState, lastUpdated: new Date() },
          { merge: true }
        );
      } else {
        localStorage.setItem("reactCampProgress", JSON.stringify(newState));
      }
    }
  };

  const toggleVideo = async (videoId) => {
    const newState = { ...completedVideos, [videoId]: !completedVideos[videoId] };
    setCompletedVideos(newState);

    // Award points and update streak
    if (!completedVideos[videoId]) {
      const newPoints = totalPoints + 25;
      const newStreak = streak + 1;
      setTotalPoints(newPoints);
      setStreak(newStreak);
      
      if (user && db) {
        await setDoc(
          doc(db, "users", user.uid),
          { videos: newState, points: newPoints, streak: newStreak, lastUpdated: new Date() },
          { merge: true }
        );
      } else {
        localStorage.setItem("reactCampVideos", JSON.stringify(newState));
        localStorage.setItem("reactCampPoints", newPoints.toString());
        localStorage.setItem("reactCampStreak", newStreak.toString());
      }
    } else {
      if (user && db) {
        await setDoc(
          doc(db, "users", user.uid),
          { videos: newState, lastUpdated: new Date() },
          { merge: true }
        );
      } else {
        localStorage.setItem("reactCampVideos", JSON.stringify(newState));
      }
    }
  };

  const getProgress = (dayId, totalTasks) => {
    let completed = 0;
    for (let i = 0; i < totalTasks; i++) {
      if (completedSubTasks[`${dayId}-${i}`]) completed++;
    }
    return Math.round((completed / totalTasks) * 100);
  };

  if (!user && !isGuest && !loading) {
    return (
      <LoginScreen
        onGoogleLogin={handleLogin}
        onGuestAccess={handleGuestAccess}
        isDarkMode={isDarkMode}
      />
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading...</p>
        </div>
      </div>
    );
  }

  const currentDay = courseContent[activeDay] || courseContent[1];

  return (
    <div className="flex flex-col h-screen font-sans transition-colors duration-300 bg-slate-50 dark:bg-slate-950">
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        <Header
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          streak={streak}
          totalPoints={totalPoints}
        />

        <div
          className={`fixed inset-0 z-20 bg-slate-900/50 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <Sidebar
          user={user}
          isGuest={isGuest}
          activeDay={activeDay}
          setActiveDay={setActiveDay}
          getProgress={getProgress}
          courseContent={courseContent}
          onLogout={handleLogout}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          isMobileMenuOpen={isMobileMenuOpen}
          streak={streak}
          totalPoints={totalPoints}
        />

        <ContentArea
          currentDay={currentDay}
          activeDay={activeDay}
          activeModuleIndex={activeModuleIndex}
          setActiveModuleIndex={setActiveModuleIndex}
          completedSubTasks={completedSubTasks}
          completedVideos={completedVideos}
          toggleSubTask={toggleSubTask}
          toggleVideo={toggleVideo}
          getProgress={getProgress}
          user={user}
          totalPoints={totalPoints}
          streak={streak}
        />
      </div>
    </div>
  );
};

export default StudyPlanApp;