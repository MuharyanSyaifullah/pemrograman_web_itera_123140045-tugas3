import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h2>404</h2>
      <p>Halaman tidak ditemukan.</p>
      <Link to="/">Kembali ke Home</Link>
    </div>
  );
}
