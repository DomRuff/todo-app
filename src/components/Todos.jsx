import React from 'react'
import { useContext, useState } from 'react'
import Todo from './Todo';
import { Context } from '../App';

const Todos = () => {


  const [todoLists, setTodoLists] = useContext(Context);

  return (
    <section className='py-8'>
      <div className='container mx-auto px-4'>

        {/* Display all todo lists in a short form*/}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {todoLists.map((todo) => (
            <Todo key={todo.id} todo={todo} />
            ))}
        </div>
      </div>
    </section>
  )
}

export default Todos