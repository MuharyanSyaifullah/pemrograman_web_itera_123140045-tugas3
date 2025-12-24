import React, { useMemo, useState } from "react";

function validate({ title, author, status }) {
  const errors = {};
  if (!title || !title.trim()) errors.title = "Judul wajib diisi";
  if (!author || !author.trim()) errors.author = "Penulis wajib diisi";
  if (status !== "READING" && status !== "FINISHED") errors.status = "Status tidak valid";
  return errors;
}

export default function BookForm({
  initialValues = { title: "", author: "", status: "READING" },
  onSubmit,
  submitLabel = "Simpan",
}) {
  const [title, setTitle] = useState(initialValues.title);
  const [author, setAuthor] = useState(initialValues.author);
  const [status, setStatus] = useState(initialValues.status);
  const [touched, setTouched] = useState({ title: false, author: false, status: false });

  const errors = useMemo(() => validate({ title, author, status }), [title, author, status]);
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ title: true, author: true, status: true });

    const nextErrors = validate({ title, author, status });
    if (Object.keys(nextErrors).length > 0) return;

    onSubmit({ title, author, status });
  };

  return (
    <form onSubmit={handleSubmit} aria-label="book-form">
      <div style={{ marginBottom: 12 }}>
        <label>Judul</label>
        <input
          aria-label="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, title: true }))}
          placeholder="Contoh: Clean Code"
        />
        {touched.title && errors.title && (
          <div role="alert" className="alert">
            {errors.title}
          </div>
        )}
      </div>

      <div style={{ marginBottom: 12 }}>
        <label>Penulis</label>
        <input
          aria-label="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, author: true }))}
          placeholder="Contoh: Robert C. Martin"
        />
        {touched.author && errors.author && (
          <div role="alert" className="alert">
            {errors.author}
          </div>
        )}
      </div>

      <div style={{ marginBottom: 12 }}>
        <label>Status</label>
        <select
          aria-label="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, status: true }))}
        >
          <option value="READING">Sedang dibaca</option>
          <option value="FINISHED">Selesai</option>
        </select>
        {touched.status && errors.status && (
          <div role="alert" className="alert">
            {errors.status}
          </div>
        )}
        <div className="helper">Pilih status sesuai progress membaca.</div>
      </div>

      <div className="btnRow" style={{ marginTop: 10 }}>
        <button className="btnPrimary" type="submit" disabled={!isValid}>
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
