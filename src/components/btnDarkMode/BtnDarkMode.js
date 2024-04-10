import { useEffect } from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage';
import detectDarkMode from '../../utils/detectDarkMode';

import './btnDarkMode.css';

export default function BtnDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    /* если меняются системные настройки */
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        const updatedColorScheme = event.matches ? 'dark' : 'light';
        setDarkMode(updatedColorScheme);
      });
  }, [setDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light';
    });
  };

  const defaultClass = 'dark-mode-btn';
  const activeClass = 'dark-mode-btn dark-mode-btn--active';

  return (
    <button
      className={darkMode === 'dark' ? activeClass : defaultClass}
      onClick={toggleDarkMode}>
      <svg width="16" height="16">
        <use href="../img/icons/sprite.svg#sun" viewBox="0 0 38 23"></use>
      </svg>
      <svg width="16" height="16">
        <use href="../img/icons/sprite.svg#moon" viewBox="0 0 38 23"></use>
      </svg>
    </button>
  );
}
