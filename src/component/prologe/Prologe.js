import React from 'react'
import Kartun from '../../img/kartun.png'
import './PrologeStyle.css'

const Prologe = () => {
    return (
      <div className='home'>
        <h1>TrashCare</h1>
          <p>Klasifikasi dan deteksi jenis sampah<br></br>
            serta pengolahan limbah sampah rumah tangga berdasarkan prediksi sampah</p>
          <p>Yuk gunakan <b>TrashCare</b><br></br>
            sebagai platform yang dapat membantu memudahkan kalian dalam pengelolaan sampah</p>
          <p>Kenali jenis sampahmu dan lakukan deteksi sekarang!</p>
          <a href='./deteksi'><button class="btn_deteksi">Deteksi Sampah</button></a>
          <img src={Kartun} class="kartun" />
      </div>
    )
}

export default Prologe