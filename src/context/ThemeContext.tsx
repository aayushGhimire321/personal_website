import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ag_portfolio_theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark'; // Default executive dark mode
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      body.classList.remove('bg-slate-50', 'text-slate-900');
      body.classList.add('bg-neutral-950', 'text-neutral-100');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      body.classList.remove('bg-neutral-950', 'text-neutral-100');
      body.classList.add('bg-slate-50', 'text-slate-900');
    }

    try {
      localStorage.setItem('ag_portfolio_theme', theme);
    } catch {
      // Ignore storage errors in restrictive iframes
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
