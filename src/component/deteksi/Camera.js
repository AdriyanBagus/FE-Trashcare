import React, { useState, useRef, useEffect } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from "@tensorflow/tfjs";
import './Camera.css'

const ImageDetectionApp = () => {
  const [model, setModel] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const imageRef = useRef();

  const loadModel = async () => {
    try {
      const loadedModel = await mobilenet.load();
      setModel(loadedModel);
    } catch (error) {
      console.error("Error loading the model:", error);
    }
  };

  const identifyImage = async () => {
    try {
      const predictions = await model.classify(imageRef.current);
      setPredictions(predictions);
    } catch (error) {
      console.error("Error identifying the image:", error);
    }
  };

  const handleImageUpload = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setImageURL(url);
    }
  };

  useEffect(() => {
    loadModel();
  }, []);

  return (
    <div>
      <input className="input-img" type="file" accept="image/*" onChange={handleImageUpload} />
      {imageURL && (
        <div className="preview-img">
          <img
            src={imageURL}
            alt="Uploaded Preview"
            crossOrigin="anonymous"  
            ref={imageRef}
            style={{ maxWidth: "100%" }}
          />
        </div>
      )}
      <button className="btn-deteksi" onClick={identifyImage}>Deteksi Gambar</button>
      {predictions.length > 0 && (
        <div className="prediction">
          <h2>Predictions:</h2>
          <ul>
            {predictions.map((prediction, index) => (
              <li key={index}>{`${prediction.className}: ${Math.round(
                prediction.probability * 100
              )}%`}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImageDetectionApp;
