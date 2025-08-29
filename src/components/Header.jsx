import { useState } from 'react';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm px-6 py-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold">لوحة التحكم</h2>
      <div className="flex items-center space-x-4 space-x-reverse">
        <button
          onClick={toggleDarkMode}
          className="px-3 py-1 rounded-full text-sm bg-gray-200 dark:bg-gray-700"
        >
          {darkMode ? '💡' : '🌙'}
        </button>
        <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-medium">
          A
        </div>
      </div>
    </header>
  );
}
