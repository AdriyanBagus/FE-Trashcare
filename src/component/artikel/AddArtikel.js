import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

const AddArticle = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [link, setLink] = useState('');

  const addArticle = () => {
    const db = firebase.database();
    const articlesRef = db.ref('articles');
    const newArticleRef = articlesRef.push();
    
    newArticleRef.set({
      title,
      image,
      link,
    });

    // Reset form fields
    setTitle('');
    setImage('');
    setLink('');
  };

  return (
    <div>
      <h2>Add New Article</h2>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Image URL:</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </div>
      <div>
        <label>Link:</label>
        <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
      </div>
      <button onClick={addArticle}>Add Article</button>
    </div>
  );
};

export default AddArticle;
