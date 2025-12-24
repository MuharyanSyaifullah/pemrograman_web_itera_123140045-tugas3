import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <div>
      <label>Cari buku</label>
      <input
        aria-label="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="judul / penulis"
      />
      <div className="helper">Pencarian otomatis (debounce)</div>
    </div>
  );
}
