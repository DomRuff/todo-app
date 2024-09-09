import React from 'react'
import { FaArrowLeft, FaAccessibleIcon } from 'react-icons/fa';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom'
import { Context } from '../App';
import { useContext, useState } from 'react';
import TodoCard from '../components/TodoCard';

const TodoPage = ({ addTodoCard, addTodoCardEntry, deleteTodoList, deleteTodoCard, deleteTodoCardEntry}) => {
  
  
  {/* Get the todo lists from the context */}
  const [todoLists, setTodoLists] = useContext(Context);

  {/* Get both the todoList and its id */}
  const { id } = useParams();
  const todoList = todoLists.find(todoList => todoList.id === id);
  

  {/* Get the navigate path */}
  const navigate = useNavigate();

  {/* Set the new card name */}
  const [newCard, setNewCard] = useState({
    name: '',
  });

  
  {/* Delete a todo list */}
  const onDeleteClick = (todoListId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete the todo list?"
    );
    if(!confirm) return;
    deleteTodoList(todoListId);
    navigate("/todo-list");
  };


  {/* Handle input change */}
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCard({ ...newCard, [name]: value });
  };


  {/* Handle add card */}
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTodoCard(todoList.id, newCard);
    setNewCard({ name: ''});
  };
  

  return (
    <div className='bg-gray-100 min-h-screen'>

      {/* Back to Todo-List Overview */}
      <section className='bg-gray-800 py-16 mb-8 w-full'>
        <div className='container mx-auto px-4'>
          <Link
            to="/todo-list"
            className='text-white hover:text-gray-300 inline-flex items-center text-2xl sm:text-xl md:text-2xl'>
          <FaArrowLeft className='mr-2'/> Back to Todo List Overview
          </Link>
        </div>
      </section>

      {/* Display the todo list */}
      <div className='container mx-auto px-4'>
          <div className='bg-white shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-70/30 w-full gap-6 p-6'>
            <main>

              <div className='bg-white p-6 rounded-md shadow-md text-center md:text-lef'>

                {/* Display the todo list name */}
                <h1 className='text-gray-800 text-3xl font-bold mb-4'>{todoList.name}</h1>

                {/* Display all the todo cards */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 rounded-md'>
                  {
                  todoList.cards.map((card) => (
                    <div key={card.id}>
                      <TodoCard 
                        todoList={todoList} 
                        card={card} 
                        addTodoCardEntry={addTodoCardEntry} 
                        deleteTodoCard={deleteTodoCard} 
                        deleteTodoCardEntry={deleteTodoCardEntry} />
                    </div>
                  ))}
                </div>

              {/* Add a new todo card */}
              <div className='mt-6 max-w-md mx-auto'>
                  <form onSubmit={handleFormSubmit} className='flex flex-col'>
                    <input 
                      type='text' 
                      name="name"
                      value={newCard.name}
                      onChange={handleInputChange} 
                      placeholder='New Card Name' 
                      className='border p-2 rounded mb-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
                      required
                    />

                      <button
                        type='submit'
                        className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 hover:scale-105'
                      >
                        Add Card
                      </button>
                  </form>
                </div>

              </div>
            </main>

            {/* Display the creator info, todo-list description and todo-list delete functionality*/}
            <aside className='space-y-6'>
              <div className='bg-white p-6 rounded-md shadow-md'>
                <h3 className='text-xl font-bold mb-4 text-gray-800'>Creator Info</h3>
                <h2 className='text-2xl texr-gray-700'>{todoList.creator.name}</h2>
              </div>

              <div className='bg-white p-6 rounded-md shadow-md'>
                <h3 className='text-gray-800 text-lg font-bold mb-4'>
                  Todo List Description
                </h3>
                <p className='text-gray-600'>{todoList.description}</p>
              </div>

              <div className='bg-white p-6 rounded-md shadow-md'>
                <h3 className='text-xl font-bold mb-6 text-gray-800'>Manage Todo List</h3>
                <button
                  onClick={() => onDeleteClick(todoList.id)}
                  className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300'
                >
                  Delete Todo List
                </button>
              </div>
            </aside>
          </div>
        </div>
    </div>
  );
}


export default TodoPage; 