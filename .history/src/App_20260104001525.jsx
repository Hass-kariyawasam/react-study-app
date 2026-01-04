import React, { useState, useEffect } from 'react';
import { BookOpen, Moon, Sun, Menu, X, LogIn, LogOut, User, Globe, Monitor, CheckCircle2 } from 'lucide-react';
import { auth, db, signInWithGoogle, signOutUser } from './services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ContentArea from './components/ContentArea';
import LoginScreen from './components/LoginScreen';
import { courseContent } from './data/courseContent.jsx';

const StudyPlanApp = () => {
  // State Management
  const [user, setUser] = useState(null);
  const [isGuest, setIsGuest] = useState(false);
  const [activeDay, setActiveDay] = useState(1);
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [completedSubTasks, setCompletedSubTasks] = useState({});
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  // Apply Dark Mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Auth Listener
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

  // Load Progress Data
  useEffect(() => {
    if (user && db) {
      const unsubDocs = onSnapshot(doc(db, "users", user.uid), (doc) => {
        if (doc.exists()) {
          const data = doc.data();
          if (data.progress) setCompletedSubTasks(data.progress);
        }
      });
      return () => unsubDocs();
    } else if (isGuest) {
      const saved = localStorage.getItem("reactCampProgress");
      if (saved) {
        setCompletedSubTasks(JSON.parse(saved));
      }
    }
  }, [user, isGuest]);

  // Reset tab when day changes
  useEffect(() => {
    setActiveModuleIndex(0);
    setIsMobileMenuOpen(false);
  }, [activeDay]);

  // Handlers
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
  };

  const toggleSubTask = async (dayId, taskId) => {
    const key = `${dayId}-${taskId}`;
    const newState = { ...completedSubTasks, [key]: !completedSubTasks[key] };
    setCompletedSubTasks(newState);

    if (user && db) {
      try {
        await setDoc(
          doc(db, "users", user.uid),
          { progress: newState, lastUpdated: new Date() },
          { merge: true }
        );
      } catch (error) {
        console.error("Failed to save progress:", error);
      }
    } else {
      localStorage.setItem("reactCampProgress", JSON.stringify(newState));
    }
  };

  const getProgress = (dayId, totalTasks) => {
    let completed = 0;
    for (let i = 0; i < totalTasks; i++) {
      if (completedSubTasks[`${dayId}-${i}`]) completed++;
    }
    return Math.round((completed / totalTasks) * 100);
  };

  // Show Login Screen
  if (!user && !isGuest && !loading) {
    return (
      <LoginScreen
        onLogin={handleLogin}
        onGuestAccess={handleGuestAccess}
        isDarkMode={isDarkMode}
      />
    );
  }

  // Loading State
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
        {/* Mobile Header */}
        <Header
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-20 bg-slate-900/50 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Sidebar */}
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
        />

        {/* Main Content */}
        <ContentArea
          currentDay={currentDay}
          activeDay={activeDay}
          activeModuleIndex={activeModuleIndex}
          setActiveModuleIndex={setActiveModuleIndex}
          completedSubTasks={completedSubTasks}
          toggleSubTask={toggleSubTask}
          getProgress={getProgress}
          user={user}
        />
      </div>
    </div>
  );
};

export default StudyPlanApp;