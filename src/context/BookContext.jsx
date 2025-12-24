import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";

const BookContext = createContext(null);
const STORAGE_KEY = "pw_books_v1";

function uid() {
  return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

export function BookProvider({ children }) {
  const [storedBooks, setStoredBooks] = useLocalStorage(STORAGE_KEY, []);
  const [books, setBooks] = useState(storedBooks);

  useEffect(() => {
    setBooks(storedBooks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setStoredBooks(books);
  }, [books, setStoredBooks]);

  const addBook = (payload) => {
    const newBook = {
      id: uid(),
      title: payload.title.trim(),
      author: payload.author.trim(),
      status: payload.status, // "READING" | "FINISHED"
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setBooks((prev) => [newBook, ...prev]);
    return newBook.id;
  };

  const updateBook = (id, patch) => {
    setBooks((prev) =>
      prev.map((b) =>
        b.id === id
          ? {
              ...b,
              ...patch,
              title: patch.title !== undefined ? patch.title.trim() : b.title,
              author: patch.author !== undefined ? patch.author.trim() : b.author,
              updatedAt: new Date().toISOString(),
            }
          : b
      )
    );
  };

  const deleteBook = (id) => setBooks((prev) => prev.filter((b) => b.id !== id));
  const getBookById = (id) => books.find((b) => b.id === id) || null;

  const value = useMemo(
    () => ({ books, addBook, updateBook, deleteBook, getBookById }),
    [books]
  );

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
}

export function useBooks() {
  const ctx = useContext(BookContext);
  if (!ctx) throw new Error("useBooks must be used within BookProvider");
  return ctx;
}
