import React from 'react'
import './TeamStyle.css'

const TeamComponent = (props) => {
    return (
      <div>
        <div class="responsive">
            <div class="gallery">
                <h3>{props.jabatan}</h3>
                <img src={props.foto} width="600" height="400" />
                <div class="desc">
                    <p>{props.nama}</p>
                    <p>{props.nim}</p>
                </div>
            </div>
        </div>
      </div>
    )
  }

export default TeamComponent