"use client";

import Image from "next/image";
import { useState } from "react";
import "./page.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  // State untuk modal & rating
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comments, setComments] = useState([
    { name: "Admin", text: "Contoh komentar pertama.", date: "Oct 29, 2025, 09:07 PM" },
  ]);

  // Tambah komentar
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.querySelector("#nama-user") as HTMLInputElement).value || "Anonim";
    const text = (form.querySelector("#isi-komentar") as HTMLTextAreaElement).value.trim();
    if (!text) return alert("Komentar tidak boleh kosong!");

    const newComment = { name, text, date: new Date().toLocaleString("id-ID") };
    setComments([newComment, ...comments]);
    form.reset();
  };

  return (
    <div>
      {/* HEADER */}
      <header
        className="text-white text-center py-5 hero-section"
        style={{
          backgroundImage: "url('/uploads/meimo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
          <div className="container">
            <a className="navbar-brand fs-3 fw-bold" href="#">
              Meimo
            </a>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tentang Rasa
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sejarah Kuliner
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container mt-5">
          <h1 className="display-3 fw-bold">Rasa MANADO</h1>
          <p className="lead">Jelajahi cita rasamu di Manado dan temukan sejarah di balik setiap rasa.</p>
        </div>
      </header>

      {/* INTRO */}
      <section className="text-center my-5">
        <h2>
          Kenal Lebih Dekat mengenai <span className="text-primary">Meimo!</span>
        </h2>
        <p>Masakan khas Manado dikenal dengan rasa pedas dan bumbu rempah yang kuat.</p>
      </section>

      {/* BRAND */}
      <section id="brand" className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>Apa itu Meimo?</h2>
            <p>
              Meimo adalah brand yang didedikasikan untuk membawa cita rasa otentik masakan Manado ke panggung kuliner
              yang lebih luas. Kami percaya pada resep warisan dan bahan-bahan segar.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <Image
              src="/uploads/meimobran.jpg"
              alt="Logo Meimo Masakan Manado"
              width={400}
              height={300}
              className="rounded shadow"
            />
          </div>
        </div>
      </section>

      {/* GALERI MENU */}
      <section id="menu-gallery" className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Galeri Menu</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div
                className="card shadow menu-card"
                style={{ cursor: "pointer" }}
                onClick={() => setShowModal(true)}
              >
                <Image
                  src="/uploads/babikecap.jpg"
                  className="card-img-top"
                  alt="Babi Kecap"
                  width={400}
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">Babi Kecap</h5>
                  <div className="text-warning fs-4">★★★★☆</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {showModal && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          onClick={() => setShowModal(false)}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content p-4">
              <button className="btn-close ms-auto" onClick={() => setShowModal(false)}></button>

              <div className="row">
                <div className="col-md-5">
                  <Image
                    src="/uploads/babikecap.jpg"
                    alt="Babi Kecap"
                    width={400}
                    height={300}
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-md-7">
                  <h2>Babi Kecap</h2>

                  {/* RATING */}
                  <div className="mb-3">
                    <span className="fw-bold">Beri Rating: </span>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        style={{
                          cursor: "pointer",
                          color: star <= (hoverRating || rating) ? "#ffbb00" : "#ccc",
                          fontSize: "22px",
                        }}
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <h4>Deskripsi</h4>
                  <p>Irisan daging babi dimasak dengan kecap khas Manado yang gurih dan manis.</p>

                  <h4>Sejarah</h4>
                  <p>Masakan ini merupakan salah satu sajian tradisional yang sering hadir dalam acara keluarga Manado.</p>

                  <hr />

                  <h4>Komentar Pengguna</h4>
                  <form className="comment-form" onSubmit={handleSubmit}>
                    <label htmlFor="nama-user">Nama kamu (opsional)</label>
                    <input type="text" id="nama-user" className="form-control mb-2" />
                    <label htmlFor="isi-komentar">Bagikan pengalamanmu...</label>
                    <textarea id="isi-komentar" rows={3} className="form-control mb-3"></textarea>
                    <button type="submit" className="btn btn-primary">
                      Kirim Komentar
                    </button>
                  </form>

                  <div className="mt-4">
                    {comments.map((c, i) => (
                      <div key={i} className="border rounded p-2 mb-2">
                        <div className="d-flex justify-content-between">
                          <strong>{c.name}</strong>
                          <span className="text-muted small">{c.date}</span>
                        </div>
                        <p className="mb-1">{c.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
