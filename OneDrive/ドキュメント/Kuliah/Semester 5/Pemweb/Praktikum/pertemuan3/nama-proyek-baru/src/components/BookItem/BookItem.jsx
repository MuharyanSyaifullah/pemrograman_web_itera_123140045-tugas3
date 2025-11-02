import React from 'react';
import { useBooks } from '../../context/BookContext';
import './BookItem.css'; // Kita buat CSS sederhana

function BookItem({ book }) {
  const { deleteBook, updateBook } = useBooks();

  // Fungsi untuk mengganti status buku
  const handleStatusChange = (e) => {
    updateBook(book.id, { status: e.target.value });
  };

  return (
    <div className="book-item">
      <div className="book-info">
        <h4>{book.title}</h4>
        <p>{book.author}</p>
      </div>
      <div className="book-actions">
        {/* Fitur Edit Status (Bagian dari Edit) */}
        <select value={book.status} onChange={handleStatusChange}>
          <option value="milik">Dimiliki</option>
          <option value="baca">Sedang Dibaca</option>
          <option value="beli">Ingin Dibeli</option>
        </select>
        {/* Fitur Hapus Buku */}
        <button onClick={() => deleteBook(book.id)} className="delete-btn">
          Hapus
        </button>
      </div>
    </div>
  );
}

export default BookItem;