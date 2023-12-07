import React, { Component } from "react";
import "./AboutUs.css";
import Kartun from "../../img/kartun2.png";

const AboutUs = () => {
  return (
    <div className="row">
      <h1 className="jdl">Tentang Kami</h1>
      <img className="img-column" src={Kartun} />
      <div className="column">
        <p>Kenali jenis sampahmu dan buang sampah dengan tepat!</p> 
        <p>
          TRASH CARE merupakan platform digital yang menyediakan layanan
          klasifikasi dan deteksi sampah Organik dan Anorganik, serta dalam
          platform ini juga menyediakan cara bagaimana mengelola sampah dengan
          baik dan benar yang didukung juga dengan adanya prediksi sampah di
          dalam platform. Platform ini dibuat guna memberikan edukasi kepada
          masyarakat tentang bagaimana pengelolaan limbah sampah rumah tangga
          yang dapat didaur ulang menjadi kerajinan,serta menjadi alat belajar
          anak untuk lebih perduli terhadap lingkungan dan membuang sampah pada
          tempatnya. Selain itu, pada platform ini juga menggunakan website yang
          telah terintegrasi dengan sistem pemodelan machine learning sebagai
          pendeteksi jenis sampah.
        </p>
        <p>
          Lakukan deteksi dengan scan dan membuka kamera, menggunggah gambar
          bahkan kalian juga mendapatkan petunjuk bagaimana pengelolaannya!
          prediksi sampah bisa digunakan untuk mencegah membludaknya tsunami
          sampah yang akan datang. Deteksi sampahmu dan bijak membuang sampah
          yang sesuai ya!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
