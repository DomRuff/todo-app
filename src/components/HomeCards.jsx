import React from 'react'
import {Link} from 'react-router-dom';

import Card from './Card'


const HomeCards = () => {
  return (
    <section className='py-4'>
        <div className='container-xl lg:container m-auto'>

            {/* Display the homecards of the page informing the user what to do*/}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>

                {/* Display call to action */}
                <Card>
                    <h2 className='text-2xl font-bold'>
                        Why organise tasks?
                    </h2>
                    <p className='mt-2 mb-4'>
                        Organising tasks can help you stay focused and get things done faster.
                    </p>
                    <Link
                        to="/create"
                        className='inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-700'>
                        Create Todo-List
                    </Link>
                </Card>

                {/* Display call to action */}
                <Card>
                    <h2 className='text-2xl font-bold'>
                        Where can I find my Todo Lists?
                    </h2>
                    <p className='mt-2 mb-4'>
                        You can find your Todo Lists in the Navigation Bar, as well access it via the button below.
                    </p>
                    <Link
                        to="/todo-list"
                        className='inline-block bg-blue-500 text-white rounded-lg px-4 py-2 mt-4 hover:bg-blue-700'>
                        View Todo Lists
                    </Link>
                </Card>
                
            </div>
        </div>
    </section>
  )
}

export default HomeCards