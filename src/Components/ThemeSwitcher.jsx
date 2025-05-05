import React, { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(systemTheme);
    document.documentElement.setAttribute('data-theme', systemTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <button onClick={toggleTheme}>
      <i className={theme === 'light' ? 'fa-regular fa-sun fa-2xl fa-fade' : 'fa-solid fa-moon fa-fade' }></i>
    </button>
  );
};

export default ThemeSwitcher;
