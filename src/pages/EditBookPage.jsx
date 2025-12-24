import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useBooks } from "../context/BookContext.jsx";
import BookForm from "../components/BookForm.jsx";

export default function EditBookPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBookById, updateBook } = useBooks();

  const book = getBookById(id);

  if (!book) {
    return (
      <div className="card">
        <div className="cardHeader">
          <h2>Edit Buku</h2>
          <span className="badge">Not Found</span>
        </div>
        <div className="cardBody">
          <p>Buku tidak ditemukan.</p>
          <Link className="btn" to="/">Kembali</Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (data) => {
    updateBook(id, data);
    navigate("/");
  };

  return (
    <div className="card">
      <div className="cardHeader">
        <h2>Edit Buku</h2>
        <span className="badge">Update</span>
      </div>
      <div className="cardBody">
        <BookForm
          initialValues={{ title: book.title, author: book.author, status: book.status }}
          onSubmit={handleSubmit}
          submitLabel="Update"
        />
      </div>
    </div>
  );
}
