import React from 'react'
import './FMS.css'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';



function FMS() {
  const navigate=useNavigate()
let code=''
const FMS4=<div className='fms_div'>
<p>Do you have any blackhead spots?</p>
 <button onClick={()=>{
              }} className="fms_button">YES</button>
 <button onClick={()=>{
              }} className="fms_button">NO</button>


</div>


const FMS3=<div className='fms_div'>
    <p>HOW DOES YOUR SKIN REACT TO ANY APPLICATIONS OR THE SUN?</p>
 <button onClick={()=>{
                setDisplay(FMS4)
              }} className="fms_button">VERY SENSITIVE</button>
 <button onClick={()=>{
                setDisplay(FMS4)
              }} className="fms_button">LESS SENSITIVE</button>
</div>

const FMS2=<div className='fms_div'>
  <p>What is your skin type?</p>
   <button onClick={()=>{
                  setDisplay(FMS3)
                }} className="fms_button">DRY</button>
   <button onClick={()=>{
                  setDisplay(FMS3)
                }} className="fms_button">OILY</button>
   <button onClick={()=>{
                  setDisplay(FMS3)
                }} className="fms_button">COMBO</button>


</div>

const FMS1=<div className='fms_div'>
                <button onClick={()=>{
                  setDisplay(FMS2)
                }} className="fms_button">FIND MY PRODUCT</button>
                <button onClick={()=>{
                  navigate('/')
                }} className="fms_button">I KNOW MY PRODUCT</button>

             </div>


const [display, setDisplay]=useState(FMS1)
  return (
    <div className='fms'>
      <div className="fms_nav">
        <div onClick={()=>{
          navigate(-1)
        }} className="prev">
          <AiOutlineArrowLeft />
        </div>
        <div>
          <p>SUPPLEMENT FINDER</p>
        </div>
        <Link to='/' className="close">
          <AiOutlineClose/>
        </Link>
      </div>
      {display}
    </div>
  )
}

export default FMS