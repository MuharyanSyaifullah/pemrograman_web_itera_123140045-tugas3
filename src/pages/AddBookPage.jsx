import React from "react";
import { useNavigate } from "react-router-dom";
import { useBooks } from "../context/BookContext.jsx";
import BookForm from "../components/BookForm.jsx";

export default function AddBookPage() {
  const { addBook } = useBooks();
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    addBook(data);
    navigate("/");
  };

  return (
    <div className="card">
      <div className="cardHeader">
        <h2>Tambah Buku</h2>
        <span className="badge">Create</span>
      </div>
      <div className="cardBody">
        <BookForm onSubmit={handleSubmit} submitLabel="Tambah" />
      </div>
    </div>
  );
}
