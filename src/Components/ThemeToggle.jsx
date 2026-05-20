import { useEffect, useState } from 'react';
import { prefersDarkMode } from '../utils/prefers-dark-mode';

function ThemeToggle() {
  const initializeTheme = () => {
    const stored = localStorage.getItem('dark-mode');

    if (!stored) return prefersDarkMode();

    return stored === 'true' ? true : false;
  };

  const [darkMode, setDarkMode] = useState(initializeTheme());

  useEffect(() => {
    localStorage.setItem('dark-mode', darkMode);
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <button
        onClick={toggleDarkMode}
        className="flex items-center bg-yellow-400 text-black text-sm font-medium px-4 py-2 rounded-md shadow-md hover:scale-105 hover:bg-yellow-300 hover:cursor-pointer transition duration-150"
      >
        <svg className="w-4 h-4 mr-2">
          {darkMode ? (
            <use xlinkHref="/icons.svg#sun" />
          ) : (
            <use xlinkHref="/icons.svg#moon" />
          )}
        </svg>
        {darkMode ? 'Modo claro' : 'Modo Oscuro'}
      </button>
    </>
  );
}

export default ThemeToggle;
