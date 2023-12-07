import React from 'react'
import logo from '../../img/logo.png'
import './FooterStyle.css'

const Footer = () =>{
    return (
        <div className="footer">
            <div className="row">
                <img src={logo} />
                <div className="col">
                    <div className='foot-list'>
                        <a>081228243027</a><br/>
                        <p></p>
                        <a>trashcare@gmail.com</a><br/>
                        <p></p>
                        <a>Kantor Kelurahan Margadana,
                            Jl. Abdul Syukur No.17, Kota Tegal, Jawa Tengah 52143</a>
                    </div>
                </div>
            </div>
            <div className="row">
                INFERNO Copyright © 2024 Inferno - All rights reserved || Designed By: Mahesh
            </div>
        </div>
    )
  }

export default Footer