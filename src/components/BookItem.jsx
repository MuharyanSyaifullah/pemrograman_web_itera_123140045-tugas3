import React from "react";
import { Link } from "react-router-dom";

export default function BookItem({ book, onDelete }) {
  const finished = book.status === "FINISHED";

  return (
    <div className="item">
      <div className="itemLeft">
        <div className="title">{book.title}</div>
        <div className="meta">Penulis: {book.author}</div>
        <div className="pill">
          <span className={`dot ${finished ? "" : "dotReading"}`} />
          {finished ? "Selesai" : "Sedang dibaca"}
        </div>
      </div>

      <div className="itemRight">
        <Link className="btn" to={`/edit/${book.id}`}>Edit</Link>
        <button className="btnDanger" onClick={() => onDelete(book.id)} aria-label={`delete-${book.id}`}>
          Hapus
        </button>
      </div>
    </div>
  );
}
