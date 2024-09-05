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
    <div className='bg-blue-200 rounded-lg shadow-md p-3 grid grid-cols-1'>

        {/* Display the todo card */}
        <div className='flex align-middle justify-between'> 

            {/* Display the todo card name */}
            <h1 className='font-bold'>
                {card.name}
            </h1>
 
            {/* Button to delete the todo card */}
            <button
                onClick={() => onDeleteClick(todoList.id, card.id)}
                className='text-black hover:text-red-500'
            >
                <MdDelete />
            </button>
        </div>


        {/* Display all the todo card entries */}
        <div className='grid grid-cols-1 gap-4 p-2'>
            {
            card.todos.map((entry) => (
                <div key={entry.id}>
                    <TodoCardEntry todoList={todoList} card={card} entry={entry} deleteTodoCardEntry={deleteTodoCardEntry} />
                </div>
            ))}
        </div>


        {/* Button to add a new entry */}
        <button
            onClick={() => setShowForm(!showForm)}
            className='bg-lime-300 text-black rounded-lg shadow-md hover:text-green-500'
        >
            + Add Entry
        </button>

      {/* Display the form inputs */}
      {showForm && (
        <form onSubmit={handleFormSubmit} className='mt-4 flex flex-col'>

          {/* Name */}
          <input
            type='text'
            name='name'
            value={newEntry.name}
            onChange={handleInputChange}
            placeholder='Name'
            className='mb-2 p-1 border rounded w-full'
            required
          />

          {/* Description */}
          <input
            type='text'
            name='description'
            value={newEntry.description}
            onChange={handleInputChange}
            placeholder='Description'
            className='mb-2 p-1 border rounded w-full'
            required
          />

          {/* Creator */}
          <input
            type='text'
            name='creator'
            value={newEntry.creator}
            onChange={handleInputChange}
            placeholder='Creator Name'
            className='mb-2 p-1 border rounded w-full'
            required
          />
            
          {/* Buttons */}
          <div className='flex justify-between flex-col'>

            {/* Submit */}
            <button type='submit' className='bg-blue-500 text-white p-2 rounded mb-2'>
                Add Entry
            </button>

            {/* Cancel */}
            <button 
                className='bg-red-500 text-white p-2 rounded'
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