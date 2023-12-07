import React from "react";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import logo from "../img/Artikel 2.png";
import "../component/artikel/ArtikelStyle.css";
import ArtikelComponent from "../component/artikel/ArtikelComponent";


const Artikel = () => {
  const articles = [
    {
      // title: "Artikel 1",
      content: '"Lakukan Inovasi dan Terobosan, Bank Sampah Marga Jaya Rindang Kota Tegal Dapat Apresiasi dari Puskesmas"',
      link: "https://www.example.com/react-tutorial",
      imageSrc: logo,
    },
    {
      // title: "Judul Artikel",
      content: '"Lakukan Inovasi dan Terobosan, Bank Sampah Marga Jaya Rindang Kota Tegal Dapat Apresiasi dari Puskesmas"',
      link: "https://www.example.com/javascript-best-practices",
      imageSrc: logo,
    },
    {
      // title: "Judul Artikel",
      content: '"Lakukan Inovasi dan Terobosan, Bank Sampah Marga Jaya Rindang Kota Tegal Dapat Apresiasi dari Puskesmas"',
      link: "https://www.example.com/react-tutorial",
      imageSrc: logo,
    },
    {
      // title: "Judul Artikel",
      content: '"Lakukan Inovasi dan Terobosan, Bank Sampah Marga Jaya Rindang Kota Tegal Dapat Apresiasi dari Puskesmas"',
      link: "https://www.example.com/javascript-best-practices",
      imageSrc: logo,
    },
     {
      // title: "Artikel 1",
      content: '"Lakukan Inovasi dan Terobosan, Bank Sampah Marga Jaya Rindang Kota Tegal Dapat Apresiasi dari Puskesmas"',
      link: "https://www.example.com/react-tutorial",
      imageSrc: logo,
    },
    {
      // title: "Judul Artikel",
      content: '"Lakukan Inovasi dan Terobosan, Bank Sampah Marga Jaya Rindang Kota Tegal Dapat Apresiasi dari Puskesmas"',
      link: "https://www.example.com/javascript-best-practices",
      imageSrc: logo,
    },
    {
      // title: "Judul Artikel",
      content: '"Lakukan Inovasi dan Terobosan, Bank Sampah Marga Jaya Rindang Kota Tegal Dapat Apresiasi dari Puskesmas"',
      link: "https://www.example.com/react-tutorial",
      imageSrc: logo,
    },
    {
      // title: "Judul Artikel",
      content: '"Lakukan Inovasi dan Terobosan, Bank Sampah Marga Jaya Rindang Kota Tegal Dapat Apresiasi dari Puskesmas"',
      link: "https://www.example.com/javascript-best-practices",
      imageSrc: logo,
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="article-container">
        {articles.map((article, index) => (
          <ArtikelComponent key={index} {...article} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Artikel;
