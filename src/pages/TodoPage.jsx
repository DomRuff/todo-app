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
    <div className='bg-white'>

      {/* Back to Todo-List Overview */}
      <section>
        <div>
          <Link
            to="/todo-list"
            className='text-blue-500 hover:text-gray-600 inline-flex items-center text-2xl sm:text-1xl md:text-2xl mt-9 ml-8'>
          <FaArrowLeft className='mr-2'/> Back to Todo List Overview
          </Link>
        </div>
      </section>

      {/* Display the todo list */}
      <section className='bg-white'>
        <div className='container m-auto py-10'>
          <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
            <main>

              <div className='bg-gray-100 p-6 rounded-lg shadow-md text-center md:text-left'>

                {/* Display the todo list name */}
                <h1 className='text-3xl font-bold mb-4'>{todoList.name}</h1>

                {/* Display all the todo cards */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-lg'>
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
              <div className='mt-6 max-w-md'>
                  <form onSubmit={handleFormSubmit} className='flex flex-col'>
                    <input 
                      type='text' 
                      name="name"
                      value={newCard.name}
                      onChange={handleInputChange} 
                      placeholder='New Card Name' 
                      className='border p-2 rounded mb-2 w-full'
                      required
                    />

                      <button
                        type='submit'
                        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full'
                      >
                        Add Card
                      </button>
                  </form>
                </div>

              </div>
            </main>

            {/* Display the creator info, todo-list description and todo-list delete functionality*/}
            <aside>
              <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-bold mb-6'>Creator Info</h3>
                <h2 className='text-2xl'>{todoList.creator.name}</h2>
                <hr className='my-4' />
              </div>

              <div className='bg-gray-100 p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-teal-800 text-lg font-bold mb-6'>
                  Todo List Description
                </h3>
                <p className='mb-4'>{todoList.description}</p>
              </div>

              <div className='bg-gray-100 p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-xl font-bold mb-6'>Manage Todo List</h3>
                <button
                  onClick={() => onDeleteClick(todoList.id)}
                  className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  Delete Todo List
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}


export default TodoPage; 