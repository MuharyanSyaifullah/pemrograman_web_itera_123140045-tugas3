import React from "react";

export default function FilterBar({ value, onChange }) {
  return (
    <div>
      <label>Filter status</label>
      <select aria-label="filter-status" value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="ALL">Semua</option>
        <option value="READING">Sedang dibaca</option>
        <option value="FINISHED">Selesai</option>
      </select>
    </div>
  );
}
