import React from 'react'

const FloatingOrbs: React.FC = () => {
  return (
    <div className="flex-1 relative h-screen">
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-pink-500 opacity-20 filter blur-3xl animate-float"></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-blue-500 opacity-20 filter blur-3xl animate-float-delayed"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-purple-500 opacity-20 filter blur-3xl animate-float-slow"></div>
      <div className="absolute top-3/4 left-1/3 w-36 h-36 rounded-full bg-pink-500 opacity-20 filter blur-3xl animate-float-fast"></div>
      <div className="absolute bottom-1/2 right-1/3 w-44 h-44 rounded-full bg-blue-500 opacity-20 filter blur-3xl animate-float-very-slow"></div>
    </div>
  )
}

export default FloatingOrbs