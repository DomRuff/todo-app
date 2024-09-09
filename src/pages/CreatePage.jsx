import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePage = ({ addTodoList }) => {

    const navigate = useNavigate();

    {/* Set the new todo list */}
    const [newTodoList, setNewTodoList] = useState({
        name: '',
        description: '',
        creator: ''
    });

 

    {/* Handle input change */}
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTodoList({ ...newTodoList, [name]: value});
    };


    {/* Handle add todo list */}
    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTodoList(newTodoList);
        setNewTodoList({ name: '', description: ''});
        navigate('/todo-list');
    };

  return (
    <div className="bg-gray-100 min-h-screen">
      <section className='bg-gray-800 py-16 mb-8 w-full'>
          <h1 className='text-3xl font-bold text-white sm:text-2xl md:text-4xl text-center'>
          Create New Todo List
          </h1>
        </section>

      
      <form 
        onSubmit={handleFormSubmit} 
        className="max-w-lg mx-auto bg-white shadow-lg rounded-md p-8 flex flex-col gap-6">
        <div>

          {/* Name */}
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={newTodoList.name}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>

          {/* Description */}
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <input
            type="text"
            name="description"
            value={newTodoList.description}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>

          {/* Creator */}
          <label className="block text-sm font-medium text-gray-700">
            Creator
          </label>
          <input
            type="text"
            name="creator"
            value={newTodoList.creator}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        {/* Add Todo List */}
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold rounded-lg px-6 py-3 transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
        >
          Add Todo List
        </button>
      </form>
    </div>
  );
};

export default CreatePage;