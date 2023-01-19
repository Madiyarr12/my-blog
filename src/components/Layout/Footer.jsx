import React from 'react'
import '../../styles/footer.scss'
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai'
function Footer() {
  const date = new Date()
  return (
    <footer className="border-t border-[#CBD5E1] pt-[27px] pb-[37px] ">
      <div className="container">
        <div className=" text-[#CBD5E1]">
         <p> &copy; Copyright {date.getFullYear()} by Madiyar’s blog.</p>
        </div>
        <ul className="flex space-x-3">
          <li>
            <a href="#">
              <AiFillGithub className='h-10 w-10 text-white' />
            </a>
          </li>
          <li>
            <a href="#">
              <AiFillFacebook className='h-10 w-10 text-white' />
            </a>
          </li>
          <li>
            <a href="#">
              <AiFillTwitterCircle className='h-10 w-10 text-white' />
            </a>
          </li>
          <li>
            <a href="#">
              <AiFillLinkedin className='h-10 w-10 text-white' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
