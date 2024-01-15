import React, { useEffect, useState } from "react";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import ArtikelComponent from "../component/artikel/ArtikelComponent";

const Artikel = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:5000/get_articles");
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

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
