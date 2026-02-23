'use client'; // This tells Next.js this happens in the browser, like flipping a real switch!

import { createContext, useContext, useState, ReactNode } from 'react';

// This is the shape of our magic switch
type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

// We are making the magic wire here
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// This wrapper goes around our whole house
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // The actual action of flipping the switch up or down
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {/* This changes the big invisible box around our app to dark or light */}
      <div className={isDarkMode ? 'dark-theme' : 'light-theme'} style={{ minHeight: '100vh', transition: 'all 0.3s ease' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

// This is a shortcut so our rooms can easily check if the switch is on or off
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used inside the ThemeProvider');
  }
  return context;
}