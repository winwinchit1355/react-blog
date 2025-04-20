import React, { useState } from 'react'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
        {/* LOGO  */}
        <div className="flex items-center gap-4 text-2xl font-bold">
          <img src="/images/logo.png" alt="" className='w-10 h-10 md:w-15 md:h-15 rounded-full object-cover' />
          <span>My Journey</span>
        </div>
        {/* MOBILE MENU  */}
        <div className="md:hidden">
          {/* MOBILE BUTTON  */}
          <div onClick={() => setMenuOpen(!menuOpen)} className="text-2xl cursor-pointer">
            {menuOpen ? 'X' : '☰'}
          </div>
          {/* MOBILE LINK LISTS  */}
          <div className={`w-full h-screen flex flex-col justify-center items-center absolute top-16 gap-8 font-medium text-lg transition-all ease-in-out ${menuOpen ? "-right-0":"-right-[100%]"} `}>
            <a href="">Home</a>
            <a href="">Trending</a>
            <a href="">Most popular</a>
            <a href="">About</a>
            <a href="">
              <button className='py-2 px-4 rounded-3xl bg-blue-400 text-white'>Login👍</button>
            </a>
          </div>
        </div>
        {/* DESKTOP MENU  */}
        <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
          <a href="">Home</a>
          <a href="">Trending</a>
          <a href="">Most popular</a>
          <a href="">About</a>
          <a href="">
            <button className='py-2 px-4 rounded-3xl bg-blue-400 text-white'>Login👍</button>
          </a>
        </div>
    </div>
  )
}

export default NavBar