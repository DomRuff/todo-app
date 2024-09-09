import React from 'react'
import {FaAccessibleIcon} from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Todo = ({ todo }) => {

  // Set state for showFullDescription and cut off description if it is too long
  const [showFullDescription, setShowFullDescription] = useState(false);
  let description = todo.description;
  const isLongDescription = description.length > 64;
  if(!showFullDescription && isLongDescription) {
    description = description.substring(0, 64) + "...";
  }

  return (
    <div className='bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between'>
      <div className='p-6'>

        {/* Display the todo list name */}
        <div className='mb-6'>
          <h3 className='text-xl font-bold texr-gray-800'>{todo.name}</h3>
        </div>

        {/* Display the todo list description */}
        <div className='mb-5 text-gray-600'>{description}</div>

        {/* Button to expand the todo list description*/}
        {isLongDescription && (

          <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className='text-blue-500 mb-5 hover:text-blue-700 transition duration-300 ease-in-out'
          >
            {showFullDescription ? "Less" : "More"}
          </button>

        )}
        



        <div className='border border-gray-100 mb-5'></div>

        {/* Link to the todo list */}
        <div className='flex flex-col lg:flex-row justify-between mb-4'>
          <Link
            to={`/todo-list/${todo.id}`}
            className='inline-block mt-6 bg-blue-600 text-white font-semibold text-center rounded-lg px-6 py-3 transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105'
          >
            View
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Todo