import React, { useMemo, useState } from "react";
import { useBooks } from "../context/BookContext.jsx";
import FilterBar from "../components/FilterBar.jsx";
import SearchBar from "../components/SearchBar.jsx";
import BookList from "../components/BookList.jsx";
import useDebounce from "../hooks/useDebounce.js";

export default function HomePage() {
  const { books, deleteBook } = useBooks();
  const [filter, setFilter] = useState("ALL");
  const [q, setQ] = useState("");
  const debouncedQ = useDebounce(q, 250);

  const filtered = useMemo(() => {
    const query = debouncedQ.trim().toLowerCase();
    return books
      .filter((b) => (filter === "ALL" ? true : b.status === filter))
      .filter((b) => {
        if (!query) return true;
        return b.title.toLowerCase().includes(query) || b.author.toLowerCase().includes(query);
      });
  }, [books, filter, debouncedQ]);

  return (
    <div className="card">
      <div className="cardHeader">
        <h2>Daftar Buku</h2>
        <span className="badge">{filtered.length} item</span>
      </div>
      <div className="cardBody">
        <div className="row">
          <FilterBar value={filter} onChange={setFilter} />
          <SearchBar value={q} onChange={setQ} />
        </div>
        <BookList books={filtered} onDelete={deleteBook} />
      </div>
    </div>
  );
}
