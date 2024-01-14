import React from 'react'
import Form from '../component/sentimen/form'
import Navbar from '../component/navbar/Navbar'

const SentimenAnalis = () => {
  const handleFormSubmit = (data) => {
    // Lakukan apa yang Anda perlukan dengan data yang dikirimkan, misalnya mengirimnya ke server
    console.log('Data Ulasan:', data);
  };

  return (
    <div>
      <Navbar/>
      <h1>Form Sentimen Analis</h1>
      <Form/>
    </div>
  );
};

export default SentimenAnalis