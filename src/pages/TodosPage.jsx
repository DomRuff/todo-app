import React from 'react'
import Todos from '../components/todos'
import { useState } from 'react'

const TodosPage = () => {

  return (
    <div>
        <section className='bg-gray-700 py-5 mb-8'>
          <h1 className='text-3xl font-bold text-white sm:text-2xl md:text-4xl text-center p-5'>
              Browse Todo-Lists
          </h1>
        </section>
        <Todos />
    </div>
    
  )
}

export default TodosPage