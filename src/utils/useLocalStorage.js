import { useState, useEffect } from 'react';

function getStorageValue(key, defaultValue) {
  // берем значение из localStorage или возвращаем значение по умолчанию
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
  // в начальное состояние записваем результат работы функции getStorageValue
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // отслеживаем изменение key и value
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
