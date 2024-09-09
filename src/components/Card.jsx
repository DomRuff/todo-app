import React from 'react'

const Card = ({ children, bg = 'bg-gray-100'}) => {
  return <div className={`${bg} p-6 rounded-md shadow-md transition duration-100 ease-in-out transform hover:shadow-lg`} >{children}</div>
}

export default Card