import React from 'react'

const Hero = ({
    title = "Todo App",
    subtitle = "Organize your tasks and get things done with ease!"
}) => {


  return (
    <section className='bg-gray-800 py-20 mb-4'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
            <div className='text-center'>

                {/* Display the title of the page */}
                <h1 className='text-4xl font-extrabold text-gray-100 sm:text-5xl md:text-6xl'>
                    {title}
                </h1>

                {/* Display the subtitle of the page */}
                <p className='text-xl text-gray-300 my-4'>
                    {subtitle}
                </p>
            </div>
        </div>
    </section>
  )
}

export default Hero