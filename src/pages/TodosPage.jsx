import React from 'react'
import Todos from '../components/todos'
import { useState } from 'react'

const TodosPage = () => {

  return (
    <div className='bg-gray-100 min-h-screen'>
        <section className='bg-gray-800 py-16 mb-8 w-full'>
          <h1 className='text-3xl font-bold text-white sm:text-2xl md:text-4xl text-center'>
              Browse Todo Lists
          </h1>
        </section>
        <Todos />
    </div>
    
  )
}

export default TodosPage