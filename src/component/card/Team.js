import React, { Component } from 'react'
import Profile1 from '../../img/adi.png'
import Profile2 from '../../img/adriyan.png'
import Profile3 from '../../img/mita.png'
import Profile4 from '../../img/lala.png'
import TeamComponent from './TeamComponent'
import './TeamStyle.css'


const Team = () => {
    return (
      <div class="tim" id="#tim">
        <h1>Tim Kami</h1>
        <TeamComponent
          // jabatan = "Ketua"
          foto = {Profile1}
          nama = "Adi Sucipto"
          nim = '21090040'      
        />
        <TeamComponent
          // jabatan = "Anggota"
          foto = {Profile2}
          nama = "Adriyan Bagus Krisnayandhi"
          nim = '21090007'      
        />
        <TeamComponent
          // jabatan = "Anggota"
          foto = {Profile3}
          nama = "Sakinah Umi Pramita"
          nim = '21090087'      
        />
        <TeamComponent
          // jabatan = "Anggota"
          foto = {Profile4}
          nama = "Nabilla Auly Zahra"
          nim = '21090094'      
        />
      </div>
    )
  }

export default Team