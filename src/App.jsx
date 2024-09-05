import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () => {
  return (
    <div className='font-[Roboto] flex justify-between'>
    <div>
      <Sidebar />
    </div>
      <main className='w-full'>
         <Navbar />
         <Home />
      </main>
    </div>
  )
}

export default App
