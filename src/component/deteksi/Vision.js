import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Camera.css";

const Vision = () => {
  const [inputValue, setInputValue] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [message, setMessage] = useState("");
  const [predictionResult, setPredictionResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  // Mengambil histori dari local storage saat komponen dimount
  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("predictionHistory")) || [];
    setHistory(storedHistory);
  }, []);

  // Menyimpan histori ke local storage setiap kali histori diupdate
  useEffect(() => {
    localStorage.setItem("predictionHistory", JSON.stringify(history));
  }, [history]);

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      getBase64(file);
    }
  };

  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      const base64String = reader.result.split(",")[1];
      setInputValue(base64String);
      setImageURL(reader.result);
      console.log("Gambar dalam format base64:", base64String);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Lakukan prediksi
      const response = await axios.post(
        "http://localhost:5000/api/deteksi-sampah",
        {
          message: inputValue,
        }
      );

      // Simpan hasil prediksi
      setPredictionResult(response.data);

      // Tambahkan hasil ke dalam histori
      setHistory((prevHistory) => [...prevHistory, response.data]);
    } catch (error) {
      console.log("Gagal terkirim:", error);
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message;
        setMessage(`Gagal terkirim: ${errorMessage}`);
        console.log("Pesan Kesalahan:", errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteHistory = (index) => {
    // Buat salinan histori tanpa entri yang akan dihapus
    const updatedHistory = [...history];
    updatedHistory.splice(index, 1);

    // Perbarui state histori
    setHistory(updatedHistory);
  };

  return (
    <div className="center">
      {imageURL && (
        <div className="preview-img">
          <img
            src={imageURL}
            alt="Uploaded Preview"
            style={{ maxWidth: "100%" }}
          />
        </div>
      )}
      <label className="custom-file-input">
        <input
          type="file"
          accept="image/*"
          onChange={handleInputChange}
          style={{ display: "none" }}
        />
        <span className="file-label-text">Masukkan Gambar</span>
      </label>

      <button className="btn-deteksi" onClick={handleSubmit} disabled={loading}>
        Deteksi Gambar
      </button>

      <div className="prediction">
        <h2>Hasil Deteksi:</h2>
        {predictionResult && (
          <div className="result">
            <p>Nama : {predictionResult.nama}</p>
            <p>Probability : {predictionResult.akurasi}</p>
          </div>
        )}
      </div>

      <div className="history">
        <h2>Histori Deteksi:</h2>
        {history.map((item, index) => (
          <div key={index} className="history-item">
            <p>Nama : {item.nama}</p>
            <p>Probability : {item.akurasi}</p>
            <button onClick={() => handleDeleteHistory(index)}>Hapus</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vision;
