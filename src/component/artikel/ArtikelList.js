import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.database();
      const articlesRef = db.ref('articles');
      const snapshot = await articlesRef.once('value');
      const articleData = snapshot.val();
      
      if (articleData) {
        const articleList = Object.keys(articleData).map((articleId) => ({
          id: articleId,
          ...articleData[articleId],
        }));                         
        setArticles(articleList);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Article List</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <img src={article.image} alt={article.title} />
            <p><a href={article.link} target="_blank" rel="noopener noreferrer">Read more</a></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
