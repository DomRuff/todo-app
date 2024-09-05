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
    <div className='bg-gray-100 rounded-lg shadow-md relative'>
      <div className='p-6'>

        {/* Display the todo list name */}
        <div className='mb-6'>
          <h3 className='text-xl font-bold'>{todo.name}</h3>
        </div>

        {/* Display the todo list description */}
        <div className='mb-5'>{description}</div>

        {/* Button to expand the todo list description*/}
        {isLongDescription && (

          <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className='text-blue-500 mb-5 hover-text-blue-700'
          >
            {showFullDescription ? "Less" : "More"}
          </button>

        )}
        



        <div className='border border-gray-100 mb-5'></div>

        {/* Link to the todo list */}
        <div className='flex flex-col lg:flex-row justify-between mb-4'>
          <Link
            to={`/todo-list/${todo.id}`}
            className='h-[36px] bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center text-sm'
          >
            View
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Todo