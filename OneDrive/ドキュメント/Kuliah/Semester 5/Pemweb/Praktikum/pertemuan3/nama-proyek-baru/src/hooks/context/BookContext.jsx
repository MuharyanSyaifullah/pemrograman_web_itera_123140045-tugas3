import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { v4 as uuidv4 } from 'uuid'; // Kita perlu ID unik untuk setiap buku

const BookContext = createContext();

export function useBooks() {
  return useContext(BookContext);
}
export const BookProvider = ({ children }) => {
 const [books, setBooks] = useLocalStorage('books', []);
  
  function addBook({ title, author, status }) {
    setBooks(prevBooks => {
      if (!title || !author || !status) {
        alert("Judul, Penulis, dan Status tidak boleh kosong!");
        return prevBooks;
      }
      return [...prevBooks, { id: uuidv4(), title, author, status }];
    });
  }

  // Menghapus buku
  function deleteBook(id) {
    setBooks(prevBooks => {
      return prevBooks.filter(book => book.id !== id);
    });
  }
  
  // Mengedit buku
  function updateBook(id, updates) {
     setBooks(prevBooks => {
      return prevBooks.map(book => {
        if (book.id === id) {
          return { ...book, ...updates };
        }
        return book;
      });
    });
  }

  // Nilai yang akan dibagikan ke seluruh aplikasi
  const value = {
    books,
    addBook,
    deleteBook,
    updateBook
  };

  return (
    <BookContext.Provider value={value}>
      {children}
    </BookContext.Provider>
  );
};