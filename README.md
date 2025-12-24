# 📚 Aplikasi Manajemen Buku Pribadi

Aplikasi Manajemen Buku Pribadi adalah aplikasi web berbasis React yang digunakan untuk mengelola daftar buku secara sederhana.  
Aplikasi ini dibuat untuk memenuhi **Tugas 3 Praktikum Pemrograman Web**.

Pengguna dapat menambahkan, mengedit, menghapus, memfilter, dan mencari buku berdasarkan judul atau penulis.  
Data disimpan secara lokal menggunakan **localStorage**, sehingga tidak hilang saat halaman direfresh.

---

## 👤 Identitas Mahasiswa

Nama  : Muharyan Syaifullah  
NIM   : 123140045  
Kelas : RB  

---

## 🚀 Teknologi yang Digunakan

- React (Functional Components)
- Vite
- React Router DOM
- Context API
- localStorage
- CSS (Custom Dark Theme)

---

## ✨ Fitur Aplikasi

- Menambahkan buku (judul, penulis, dan status)
- Mengedit data buku
- Menghapus buku
- Filter buku berdasarkan status:
  - Sedang dibaca
  - Selesai
- Pencarian buku berdasarkan judul atau penulis (debounce)
- Navigasi halaman tanpa reload (Single Page Application)
- Tampilan dark mode modern

---

## 🧠 Konsep React yang Diterapkan

- useState  
- useEffect  
- useContext  
- Custom Hooks (useLocalStorage, useDebounce)  
- Context API  
- React Router  
- Controlled Components  
- Conditional Rendering  

---

## 📂 Struktur Folder

src/  
├── components/  
│   ├── BookForm.jsx  
│   ├── BookItem.jsx  
│   ├── BookList.jsx  
│   ├── Container.jsx  
│   ├── FilterBar.jsx  
│   ├── NavBar.jsx  
│   └── SearchBar.jsx  
├── pages/  
│   ├── HomePage.jsx  
│   ├── AddBookPage.jsx  
│   ├── EditBookPage.jsx  
│   └── NotFoundPage.jsx  
├── context/  
│   └── BookContext.jsx  
├── hooks/  
│   ├── useLocalStorage.js  
│   └── useDebounce.js  
├── App.jsx  
├── App.css  
└── main.jsx  

---

## ⚙️ Cara Menjalankan Aplikasi

1. Clone repository  
git clone https://github.com/MuharyanSyaifullah/pemrograman_web_itera_123140045-tugas3.git  

2. Masuk ke folder project  
cd pemrograman_web_itera_123140045-tugas3  

3. Install dependency  
npm install  

4. Jalankan aplikasi  
npm run dev  

5. Buka di browser  
http://localhost:5173  

---

## 📝 Catatan

- Aplikasi ini tidak menggunakan backend atau database eksternal
- Seluruh data disimpan menggunakan localStorage
- Aplikasi bersifat Single Page Application (SPA)

---

## 📌 Kesimpulan

Aplikasi Manajemen Buku Pribadi ini dibuat dengan menerapkan konsep dasar React seperti hooks, context, dan routing.  
Aplikasi ini membantu pengguna dalam mengelola daftar buku pribadi secara sederhana, efektif, dan mudah digunakan.

Terima kasih.
