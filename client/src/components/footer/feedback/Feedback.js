import React from 'react'
import './Feedback.css'


function Feedback() {
  return (
    <div className='feedback'>
        <div className="feedback_container">
        <h3>Leave feedback</h3>
        <form>
            <input type="text" placeholder="Name"/>
            <textarea name="content" id="" cols="30" rows="10"></textarea>
            <div className="send">
                <button type='submit'>SEND</button>
            </div>
        </form>


        </div>
    </div>
  )
}

export default Feedback