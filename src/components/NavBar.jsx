import React, { useState } from 'react'
import { Image } from './Image';
import { Link } from 'react-router';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
      {/* LOGO  */}
      <Link to={{
        pathname: "/"
      }}
        className="flex items-center gap-4 text-2xl font-bold">
        <Image className='w-10 h-10 md:w-15 md:h-15 rounded-full object-cover' imagePath='react-blog/logo.png' alt='Site Logo' w={32} h={32} />
        <span>My Journey</span>
      </Link>
      {/* MOBILE MENU  */}
      <div className="md:hidden">
        {/* MOBILE BUTTON  */}
        <div onClick={() => setMenuOpen(!menuOpen)} className="text-2xl cursor-pointer">
          {menuOpen ? 'X' : '☰'}
        </div>
        {/* MOBILE LINK LISTS  */}
        <div className={`w-full h-screen flex flex-col justify-center items-center absolute top-16 gap-8 font-medium text-lg transition-all ease-in-out ${menuOpen ? "-right-0" : "-right-[100%]"} `}>
          <Link to="/">Home</Link>
          <Link to={{
            pathname: "/posts",
            search: "?query=trending",
          }}>Trending</Link>
          <Link to={{
            pathname: "/posts",
            search: "?query=mostpopular",
          }}>Most popular</Link>
          <Link to="">About</Link>
          <Link to="">
            <button className='py-2 px-4 rounded-3xl bg-blue-400 text-white'>Login👍</button>
          </Link>
        </div>
      </div>
      {/* DESKTOP MENU  */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to={{
          pathname: "/posts",
          search: "?query=trending",
        }}>Trending</Link>
        <Link to={{
          pathname: "/posts",
          search: "?query=mostpopular",
        }}>Most popular</Link>
        <Link to="">About</Link>
        <Link to="/login">
          <button className='py-2 px-4 rounded-3xl bg-blue-400 text-white'>Login👍</button>
        </Link>
      </div>
    </div>
  )
}

export default NavBar