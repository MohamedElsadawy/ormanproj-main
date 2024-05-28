import React from 'react'
import './Elorman.css'
const Elorman = ({bool}) => {
  return (
    <div className="ormanback" >
      <img src={`../../../assets/${bool?"ormanback.png":"ResalaImg.png"}`} className='sora' alt="" />
    </div>
  )
}

export default Elorman
