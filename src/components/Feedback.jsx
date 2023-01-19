import React from 'react'
import '../styles/feedback.scss'
function Feedback() {
  return (
    <div className="feedBack">
      <div className=' feedBack-text'>
        <h3>
          Subscribe to my <span className='text-[#0ea5e9]'>Newsletters</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          laudantium nostrum commodi?
        </p>
      </div>
      <div className='feedBack-subcribe'>
        <input type="email" placeholder='Enter your Email'/>
        <button className='bg-[#0ea5e9] px-5 py-2 rounded-xl active:scale-95 duration-200 '>Subcribe</button>
      </div>
    </div>
  )
}

export default Feedback
