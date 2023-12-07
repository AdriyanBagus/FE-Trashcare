import React, { useState } from "react";
import axios from "axios";
import './Camera.css'

const Vision = () => {
  const [inputValue, setInputValue] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [predictions, setPredictions] = useState([]);

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      getBase64(file);
    }
  }

  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      const base64String = reader.result.split(',')[1];
      setInputValue(base64String);
      setImageURL(reader.result); // Tambahkan ini untuk menampilkan gambar
      console.log('Gambar dalam format base64:', base64String);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Lakukan prediksi
      const response = await axios.post('http://localhost:5000/api/deteksi-sampah', {
        message: inputValue
      });

      // Simpan hasil prediksi
      setPredictions(response.data);

      // console.log(response);
      console.log(response.data);

    } catch (error) {
      console.log('Gagal terkirim:', error);
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message;
        console.log('Pesan Kesalahan:', errorMessage);
      }
    }
  };

  return (
    <div className="center">
      <input
        className="input-img"
        type="file"
        accept="image/*"
        onChange={handleInputChange}
      />
      {imageURL && (
        <div className="preview-img">
          <img
            src={imageURL}
            alt="Uploaded Preview"
            style={{ maxWidth: "100%" }}
          />
        </div>
      )}
      <button className="btn-deteksi" onClick={handleSubmit}>
        Deteksi Gambar
      </button>

      <div className="prediction">
        <h2>Hasil Deteksi:</h2>
        {predictions && predictions.length > 0 ? (
          <ul>
            {predictions.map((prediction, index) => (
              <li key={index}>
                Nama: {prediction.nama}, Akurasi: {prediction.akurasi}%
              </li>
            ))}
          </ul>
        ) : (
          <p>Tidak ada hasil deteksi.</p>
        )}
      </div>
    </div>
  );
};

export default Vision;