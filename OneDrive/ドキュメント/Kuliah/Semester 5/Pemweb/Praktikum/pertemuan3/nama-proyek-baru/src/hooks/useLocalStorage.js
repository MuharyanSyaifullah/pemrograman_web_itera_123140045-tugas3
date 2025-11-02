import { useState, useEffect } from 'react';

// Fungsi helper untuk mengambil data dari local storage
function getStorageValue(key, defaultValue) {
  // Cek apakah kode dijalankan di browser (bukan di server)
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(key);
    const initial = saved !== null ? JSON.parse(saved) : defaultValue;
    return initial;
  }
  return defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  // Setiap kali 'value' berubah, simpan ke local storage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};