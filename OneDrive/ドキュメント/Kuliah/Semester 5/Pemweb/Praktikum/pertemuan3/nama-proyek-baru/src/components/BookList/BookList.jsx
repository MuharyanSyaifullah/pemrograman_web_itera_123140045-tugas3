import React from 'react';
import { useBooks } from '../../context/BookContext';
import BookItem from '../BookItem/BookItem'; // Kita akan buat ini selanjutnya

function BookList() {
  // Ambil data buku dari context
  const { books } = useBooks();

  if (books.length === 0) {
    return <p>Belum ada buku di koleksi Anda.</p>;
  }

  return (
    <div className="book-list">
      <h3>Koleksi Buku Saya</h3>
      {/* Render daftar (list rendering)
        'key' sangat penting untuk performa React 
      */}
      {books.map(book => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;