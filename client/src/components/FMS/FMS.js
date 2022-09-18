import React, { useEffect } from 'react'
import './FMS.css'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';




function FMS() {
const navigate=useNavigate();
const [code, setCode] = useState('')
useEffect(()=>{
  console.log(code)

}, [code])

const FMS4=<div className='fms_div'>
<p>Do you have any blackhead spots?</p>
 <button onClick={()=>{
                setCode(code+'1')

              }} className="fms_button">YES</button>
 <button onClick={()=>{
        setCode(code+'0')
              }} className="fms_button">NO</button>


</div>


const FMS3=<div className='fms_div'>
    <p>HOW DOES YOUR SKIN REACT TO ANY APPLICATIONS OR THE SUN?</p>
 <button onClick={()=>{
                setX(x+1)
                setCode(code+'1')

              }} className="fms_button">VERY SENSITIVE</button>
 <button onClick={()=>{
                setCode(code+'0')

                setX(x+1)
              }} className="fms_button">LESS SENSITIVE</button>
</div>

const FMS2=<div className='fms_div'>
  <p>What is your skin type?</p>
   <button onClick={()=>{
                 setCode(code+'1')
                  setX(x+1)
                }} className="fms_button">DRY</button>
   <button onClick={()=>{
              setCode(code+'0')
                  setX(x+1)
                }} className="fms_button">OILY</button>
   <button onClick={()=>{
        setCode('10')
                  setX(x+1)
                }} className="fms_button">COMBO</button>


</div>

const FMS1=<div className='fms_div'>
                <button onClick={()=>{
                  setX(x+1)
                }} className="fms_button">FIND MY PRODUCT</button>
                <button onClick={()=>{
                  navigate('/')
                }} className="fms_button">I KNOW MY PRODUCT</button>

             </div>

const FMS=[FMS1, FMS2, FMS3, FMS4]
const [x, setX]=useState(0)
  return (
    <div className='fms_component'>
      <div className="fms_nav">
        <div onClick={()=>{
          if(x===0){
            navigate(-1)

          }else{
            setCode(code.slice(0, -1))
            setX(x-1);

          }

        }} className="prev">
          <AiOutlineArrowLeft />
        </div>
        <div>
          <p>SUPPLEMENT FINDER</p>
        </div>
        <Link onClick={()=>{
          setCode('')
        }} to='/' className="close">
          <AiOutlineClose/>
        </Link>
      </div>
      {FMS[x]}
    </div>
  )
}

export default FMS