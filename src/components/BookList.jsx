import React from "react";
import BookItem from "./BookItem.jsx";

export default function BookList({ books, onDelete }) {
  if (books.length === 0) return <div className="empty">Tidak ada data buku.</div>;

  return (
    <div className="list" aria-label="book-list">
      {books.map((b) => (
        <BookItem key={b.id} book={b} onDelete={onDelete} />
      ))}
    </div>
  );
}
