import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-4 bg-gray-100 min-h-screen">
      {/* Navbar  */}
      <NavBar />
      {/* breadcrumb  */}
      {/* intro */}
      {/* feature post  */}
      {/* post list  */}
    </div>
  )
}

export default App
