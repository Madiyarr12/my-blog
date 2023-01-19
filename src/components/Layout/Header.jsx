import React, { useState } from 'react'
import '../../styles/header.scss'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
function Header() {
  const [open, setOpen] = useState(false)
  const openMenu = () => {
    open ? setOpen(false) : setOpen(true)
  }
  return (
    <>
      <header className="desktopHeader">
        <nav>
          <div className="flex items-center ">
            <img
              className="w-[80px] h-[70px] mr-3"
              src="https://i.postimg.cc/J79LHfhG/image-removebg-preview.png"
              alt="logo"
            />
            <h1 className="logo text-[25px] font-[700]">Madiyar's Blog</h1>
          </div>
          <ul>
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Twitter</li>
          </ul>
        </nav>
      </header>
      {/* Mobile Header */}
      <header className="mobileHeader hidden">
        <nav>
          <div className="flex items-center ">
            <img
              className="w-[60px] h-[50px] mr-3"
              src="https://i.postimg.cc/J79LHfhG/image-removebg-preview.png"
              alt="logo"
            />
            <div className="logo text-[22px] font-[700]">Madiyar's Blog</div>
          </div>
          <div onClick={openMenu} className="menu active:scale-95 duration-200">
            {open ? (
              <AiOutlineClose className="h-10 w-10 duration-200 text-[#0ea5e9]" />
            ) : (
              <AiOutlineMenu className="h-10 w-10 duration-200 text-[#0ea5e9]" />
            )}
          </div>
        </nav>
        {open ? (
          <ul>
            <li className='animate__animated animate__bounceInLeft'>Blog</li>
            <li className='animate__animated animate__bounceInLeft'>Newsletter</li>
            <li className='animate__animated animate__bounceInLeft'>Twitter</li>
          </ul>
        ) : null}
      </header>
    </>
  )
}

export default Header
