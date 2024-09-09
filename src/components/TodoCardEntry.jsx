import React from 'react'
import { useState } from 'react';
import Modal from './Modal';
import { IoIosCloseCircle } from "react-icons/io";


const TodoCardEntry = ({todoList, card, entry, deleteTodoCardEntry}) => {
  
  {/* State of modal */}
  const [isModalOpen, setIsModalOpen] = useState(false);


  {/* Delete a todo card entry*/}
  const onDeleteClick = (todoListId, cardId, entryId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete the todo list entry?"
    );

    if(!confirm) return;

    deleteTodoCardEntry(todoListId, cardId, entryId);
    handleCloseModal();
  };


  {/* Open modal of entry */}
  const handleEntryClick = () => {
    setIsModalOpen(true);
  };

  {/* Close modal of entry */}
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };



  return (
    <div>
      {/* Display the todo entry name and handle click event*/}
      <div className='p-2 flex items-center justify-between cursor-pointer'>
        <div
          onClick={handleEntryClick}
          className='w-full text-lg font-medium'
        >
          {entry.name}
        </div>

        <button 
          className='text-red-500 hover:text-red-700 transition duration-300 ease-in-out'
          onClick={(e) => {
            e.stopPropagation();
            onDeleteClick(todoList.id, card.id, entry.id)
          }}
        >
          <IoIosCloseCircle className='w-6 h-6'/>
        </button>
      </div>
      

      {/* Display additional information if entry is clicked */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} deleteEntry={onDeleteClick} todoList={todoList} card={card} entry={entry}>

        <div className='container m-auto py-5 px-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>

            <main className='md:col-span-2'>
              <div className='bg-gray-100 p-6 rounded-lg shadow-lg text-center md:text-left'>

                {/* Display the todo entry name */}
                <h2
                  className='text-3xl font-bold mb-4'>
                    {entry.name}
                </h2>

                {/* Display the todo entry description */}
                <div className='bg-white p-4 rounded-lg shadow-md text-center md:text-left'>
                  <h2 className='text-xl font-semibold mb-2'>
                    Description
                  </h2>

                  <p className="mb-4 mt-4 text-gray-700">{entry.description}</p>
                </div>
              </div>
            </main>
            
            <aside className='md:col-span-2'>

              {/* Display the creator of the entry */}
              <div className='bg-gray-100 p-6 rounded-lg shadow-lg'>
                <h3 className='text-xl font-bold mb-6 text-center md:text-left'>Entry Creator Info</h3>
                <p className='text-2xl text-gray-800 text-center md:text-left'>{entry.creator.name}</p>
              </div>  
            </aside>
          </div>
        </div>
        
      </Modal>
    </div>
    

  )
}

export default TodoCardEntry