import React from 'react'
import {Link} from 'react-router-dom';

import Card from './Card'


const HomeCards = () => {
  return (
    <section className='py-8'>
        <div className='container m-auto px-4'>

            {/* Display the homecards of the page informing the user what to do*/}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

                {/* Display call to action */}
                <Card>
                    <h2 className='text-3xl font-bold text-gray-800'>
                        Why organise tasks?
                    </h2>
                    <p className='mt-4 text-gray-600'>
                        Organising tasks can help you stay focused and get things done faster.
                    </p>
                    <Link
                        to="/create"
                        className='inline-block mt-6 bg-blue-600 text-white font-semibold rounded-lg px-6 py-3 transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105'>
                        Create Todo-List
                    </Link>
                </Card>

                {/* Display call to action */}
                <Card>
                    <h2 className='text-3xl font-bold text-gray-800'>
                        Where can I find my Todo Lists?
                    </h2>
                    <p className='mt-4 text-gray-600'>
                        You can find your Todo Lists in the Navigation Bar, as well access it via the button below.
                    </p>
                    <Link
                        to="/todo-list"
                        className='inline-block mt-6 bg-blue-600 text-white font-semibold rounded-lg px-6 py-3 transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105'>
                        View Todo Lists
                    </Link>
                </Card>
                
            </div>
        </div>
    </section>
  )
}

export default HomeCards