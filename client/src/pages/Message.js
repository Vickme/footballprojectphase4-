import React from 'react'
import { useNavigate } from 'react-router-dom'

function Message() {
    const navigate = useNavigate()
    const handleNavigate = ()=> {
        navigate("/home")
    }
  return (
    <div className="bg-gradient-to-r from-black to-white text-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-extrabold mb-4">Welcome to Football Manager</h1>
      <p className="text-lg mb-8">Embark on a journey to create and manage your dream football team</p>
      <button onClick={handleNavigate} className="bg-yellow-500 hover:bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
        Get Started
      </button>
    </div>
  )
}

export default Message