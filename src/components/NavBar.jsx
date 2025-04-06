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
          {menuOpen ? (
            <button onClick={() => setMenuOpen(false)} className="text-2xl cursor-pointer">X</button>
          ) : (
            <button onClick={() => setMenuOpen(true)} className="text-2xl cursor-pointer">☰</button>
          )}
        </div>
        {/* DESKTOP MENU  */}
        <div className="hidden md:flex">D</div>
    </div>
  )
}

export default NavBar