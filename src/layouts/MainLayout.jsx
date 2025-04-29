import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router'

export const MainLayout = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-4 bg-gray-100 min-h-screen'>
        <NavBar />
        <Outlet />
    </div>
  )
}
