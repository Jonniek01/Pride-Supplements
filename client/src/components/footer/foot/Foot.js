import React from 'react'
import './Foot.css'
import {Link} from 'react-router-dom'
import { AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';



function Foot() {
  return (
    <div className="foot">
      <div className="details">


      <div className='about' id="about">
        <h2>ABOUT</h2>
        <p>We sell you beauty supplements and beyond making you look perfect, we help you identify the perfect product for your skin through our <Link to='/fms' style={{color:"blue"}}> knowldge based system</Link>.
          </p>
          <p>Shopping with us is an excitment beyond look !</p>
      </div>
      <div className="contact">
        <h2>CONTACT </h2>
        <a href="mailto:jontejonhn@gmail.com">
          <span>Email:</span>
          <span>xyz@gmail.com</span>
        </a>
        <br/>
        <a href='tel:0742734120'>
          <span>Tel :</span>
          <span>0742734120</span>

        </a>

      </div>
      <div className="address">
        <h2>ADRESS</h2>
        <p>PR56+XQ5, Social Security House, Starehe</p>

      </div>
      </div>
      <div className="social">
        <a href="https://instagram.com"><AiFillInstagram/></a>
        <a href="https://facebook.com"><BsFacebook/></a>
        <a href="https://youtube.com"><AiFillYoutube/></a>
        <a href="https://tiktok.com"><FaTiktok/></a>

        
      </div>
      <div className="copy">
        Copyright © <strong>PRIDE SUPPLEMENTS 2020</strong>
      </div>
    </div>

  )
}

export default Foot