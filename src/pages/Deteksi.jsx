import React from 'react'
// import Webcam from 'react-webcam'
import '../component/deteksi/Camera.css'
import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'
import Vision from '../component/deteksi/Vision'


const Deteksi = () => {
    return (
      <div>
        <Navbar />
          <h1 className='jdl-cam'>Deteksi Sampah</h1>
          <p className='text-vision'>Masukan gambar dibawah sini</p>
          <br/>
          <br/>
          <br/>
          {/* <Webcam className='camera-video' /> */}
          <Vision />
        {/* <Footer /> */}
      </div>
    )
  }

export default Deteksi