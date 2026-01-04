import React, { useState } from 'react';
import { BookOpen, LogIn, User, Mail, Lock, ArrowRight, Chrome } from 'lucide-react';
import { loginWithEmail, registerWithEmail } from '../services/firebase';

const LoginScreen = ({ onGoogleLogin, onGuestAccess }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isRegistering) {
        await registerWithEmail(email, password);
      } else {
        await loginWithEmail(email, password);
      }
      // සාර්ථක වුනාම App.jsx එකේ Auth Listener එකෙන් ඉබේම Log වෙනවා.
    } catch (err) {
      console.error(err);
      if (err.code === 'auth/invalid-credential') {
        setError("Email එක හෝ Password එක වැරදියි.");
      } else if (err.code === 'auth/email-already-in-use') {
        setError("මේ Email එක දැනටමත් භාවිතා කර ඇත. කරුණාකර Log In වන්න.");
        setIsRegistering(false); // Login එකට මාරු කරන්න
      } else if (err.code === 'auth/weak-password') {
        setError("Password එකට අකුරු 6ක් වත් තිබිය යුතුයි.");
      } else {
        setError("Login වීමේ දෝෂයක්. නැවත උත්සාහ කරන්න.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 p-6">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl max-w-md w-full border border-slate-200 dark:border-slate-700">
        
        {/* Logo Section */}
        <div className="mb-6 flex justify-center">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full shadow-inner ring-4 ring-blue-50 dark:ring-slate-700">
            <BookOpen size={40} className="text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 text-center">
          {isRegistering ? "Create Account" : "Welcome Back"}
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mb-6 text-center text-sm">
          ඔබේ ප්‍රගතිය (Progress) Cloud එකේ Save කරගන්න.
        </p>

        {/* Email/Password Form */}
        <form onSubmit={handleEmailAuth} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
            <div className="relative">
              <Mail size={18} className="absolute left-3 top-3 text-slate-400" />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="name@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-3 text-slate-400" />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          {error && <p className="text-rose-500 text-xs text-center font-medium bg-rose-50 dark:bg-rose-900/20 p-2 rounded">{error}</p>}

          <button 
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-bold transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20"
          >
            {loading ? "Processing..." : (isRegistering ? "Sign Up with Email" : "Log In with Email")}
            {!loading && <ArrowRight size={18} />}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-slate-200 dark:border-slate-700"></div>
          <span className="px-3 text-xs text-slate-400 font-medium">OR</span>
          <div className="flex-1 border-t border-slate-200 dark:border-slate-700"></div>
        </div>

        {/* Google Login Button */}
        <button 
          onClick={onGoogleLogin}
          className="w-full flex items-center justify-center gap-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 text-slate-700 dark:text-white py-3 px-6 rounded-xl font-semibold transition-all mb-4"
        >
          <Chrome size={20} className="text-rose-500" />
          Continue with Google
        </button>

        {/* Toggle Register/Login & Guest */}
        <div className="text-center space-y-4">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {isRegistering ? "Already have an account?" : "Don't have an account?"}
            <button 
              onClick={() => { setError(''); setIsRegistering(!isRegistering); }}
              className="text-blue-600 dark:text-blue-400 font-bold ml-1 hover:underline"
            >
              {isRegistering ? "Log In" : "Sign Up"}
            </button>
          </p>

          <button 
            onClick={onGuestAccess}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 text-xs font-medium flex items-center justify-center gap-1 mx-auto transition-colors"
          >
            <User size={14} />
            Continue Offline (Guest Mode)
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default LoginScreen;