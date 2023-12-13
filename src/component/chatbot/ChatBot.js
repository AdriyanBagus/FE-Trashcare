import React, { useState } from "react";
import axios from "axios";
import "./ChatBot.css";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = async () => {
    if (inputText.trim() === "") return;

    // Menanggapi pesan dari pengguna
    const userMessage = {
      text: inputText,
      sender: "user",
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      // Mengirim pesan pengguna ke backend Flask
      const response = await axios.post("http://localhost:5000/api/chatbot", {
        message: inputText,
      });

      // Menambahkan balasan dari chatbot
      const botMessage = {
        text: response.data.message,
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error sending message to chatbot:", error);
    }

    // Membersihkan input
    setInputText("");
  };

  return (
    <div className="bot">
      <div className="chatbot-container">
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.sender === "user" ? "user" : "bot"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type your message..."
          />
          <button className="btn-bot" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
