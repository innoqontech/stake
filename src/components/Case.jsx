import React from 'react'
import './Case.css'

const Case = (img, img1, descrip) => {
  return (
        <div className="vidowcontent">
            <div className="con1">
                <img src={img} alt="video" />
                <img src={img1} alt="logo" />
                <p>{descrip}</p>
                <span>Read case study</span>
            </div>
        </div>
  )
}

export default Case
