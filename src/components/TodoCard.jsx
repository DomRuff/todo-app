import React from 'react'
import TodoCardEntry from './TodoCardEntry'
import { MdDelete } from "react-icons/md";
import { useState } from 'react';


const TodoCard = ({todoList, card, addTodoCardEntry, deleteTodoCard, deleteTodoCardEntry}) => {

    {/* Set state for showForm and newEntry */}
    const [showForm, setShowForm] = useState(false);
    const [newEntry, setNewEntry] = useState({
        name: '',
        description: '',
        creator: ''
    });


    {/* Delete a todo card */}
    const onDeleteClick = (todoListId, cardId) => {
        const confirm = window.confirm(
          "Are you sure you want to delete the todo list card?"
        );
    
        if(!confirm) return;
    
        deleteTodoCard(todoListId, cardId);
      };


    {/* Handle input change */}
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEntry({ ...newEntry, [name]: value });
    };


    {/* Handle form submit */}
    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTodoCardEntry(todoList.id, card.id, newEntry);
        setNewEntry({ name: '', description: '', creator: '' });
        setShowForm(false);
    };


    {/* Handle cancel button */}
    const handleCancel = (e) => {
        e.preventDefault();
        setNewEntry({ name: '', description: '', creator: '' });
        setShowForm(false);
      };


  return (
    <div className='bg-blue-200 rounded-md shadow-md p-4 sm:p-6 lg:p-8 grid grid-cols-1'>

        {/* Display the todo card */}
        <div className='flex items-center justify-between mb-4'> 

            {/* Display the todo card name */}
            <h1 className='font-bold text-md sm:text-lg lg:text-xl'>
                {card.name}
            </h1>
 
            {/* Button to delete the todo card */}
            <button
                onClick={() => onDeleteClick(todoList.id, card.id)}
                className='text-black hover:text-red-500 transition duration-300 ease-in-out transform hover:scale-110'
            >
                <MdDelete className='w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8'/>
            </button>
        </div>

            {/* Display underline under the todo card name */}
            <div className='border-b-2 border-black mb-4'></div>

        {/* Display all the todo card entries */}
        <div className='grid grid-cols-1 gap-4 p-2'>
            {
            card.todos.map((entry) => (
                <div key={entry.id} className='bg-white rounded-lg shadow p-4'>
                    <TodoCardEntry todoList={todoList} card={card} entry={entry} deleteTodoCardEntry={deleteTodoCardEntry} />
                </div>
            ))}
        </div>


        {/* Button to add a new entry */}
        <button
            onClick={() => setShowForm(!showForm)}
            className='bg-lime-300 text-black rounded-lg shadow-md hover:bg-lime-400 transition duration-300 ease-in-out transform hover:scale-105 mt-4 p-2'
        >
            + Add Entry
        </button>

      {/* Display the form inputs */}
      {showForm && (
        <form onSubmit={handleFormSubmit} className='mt-4 flex flex-col space-y-2'>

          {/* Name */}
          <input
            type='text'
            name='name'
            value={newEntry.name}
            onChange={handleInputChange}
            placeholder='Name'
            className='p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />

          {/* Description */}
          <input
            type='text'
            name='description'
            value={newEntry.description}
            onChange={handleInputChange}
            placeholder='Description'
            className='p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />

          {/* Creator */}
          <input
            type='text'
            name='creator'
            value={newEntry.creator}
            onChange={handleInputChange}
            placeholder='Creator Name'
            className='p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
            
          {/* Buttons */}
          <div className='flex justify-between space-x-4'>

            {/* Submit */}
            <button type='submit' className='bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105'>
                Add Entry
            </button>

            {/* Cancel */}
            <button 
                className='bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105'
                onClick={handleCancel}>
                Cancel
            </button>
          </div>
        </form>
      )}
    </div>
    
  )
}

export default TodoCard