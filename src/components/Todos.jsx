import React from 'react'
import { useContext, useState } from 'react'
import Todo from './Todo';
import { Context } from '../App';

const Todos = () => {


  const [todoLists, setTodoLists] = useContext(Context);

  return (
    <section className='px-8'>
      <div className='container-xl lg:container m-auto'>

        {/* Display all todo lists in a short form*/}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {todoLists.map((todo) => (
            <Todo key={todo.id} todo={todo} />
            ))}
        </div>
      </div>
    </section>
  )
}

export default Todos