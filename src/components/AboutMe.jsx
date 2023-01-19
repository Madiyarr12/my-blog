import React from 'react'
import '../styles/aboutMe.scss'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook, BsYoutube } from 'react-icons/bs'
import { ImLinkedin } from 'react-icons/im'
function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="aboutMe-left">
        <h1 className="text-[48px] font-[700]">
          Hi there, I’m <span className="text-[#0ea5e9]">Madiyar</span>👋
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          malesuada nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor
          sit amet, <span className='text-[#0ea5e9]'>consectetur</span> adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et <span className='text-[#0ea5e9]'>dolore</span>.
        </p>
        <ul className="flex items-center space-x-5 ">
          <li>
            <a href="#">
              <AiFillTwitterCircle className="w-14 h-14 text-blue-500 hover:text-blue-300  duration-200 hover:scale-95" />
            </a>
          </li>
          <li>
            <a href="#">
              <BsFacebook className="w-12 h-12 text-blue-600 hover:text-white  duration-200" />
            </a>
          </li>
          <li>
            <a href="#">
              <ImLinkedin className="w-12 h-12 text-blue-800 hover:text-white  duration-200" />
            </a>
          </li>
          <li>
            <a href="#">
              <BsYoutube className="w-14 h-14 text-red-500 hover:text-white  duration-200" />
            </a>
          </li>
        </ul>
      </div>
      <div className="aboutMe-right ">
        <img className='object-cover'
          src="https://i.postimg.cc/SsKW72tJ/image-2023-01-20-00-39-50.png"
          alt="photo"
        />
      </div>
    </div>
  )
}

export default AboutMe
