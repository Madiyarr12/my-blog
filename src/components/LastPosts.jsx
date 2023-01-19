import React from 'react'
import '../styles/posts.scss'
function LastPosts() {
  return (
    <section className="mb-20">
      
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
          Latest <span className='text-[#0ea5e9]'>Posts</span>
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          <div data-aos="zoom-in" className="lg:flex bg-[#293547] rounded-xl">
            <img
              className="object-cover w-full h-56 rounded-lg lg:w-64"
              src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />

            <div className="flex flex-col justify-between py-6 lg:mx-6 p-3 ">
              <a
                href="#"
                className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
              >
                How to use sticky note for problem solving
              </a>

              <span className="text-sm text-gray-500 dark:text-gray-300">
                On: 20 October 2019
              </span>
            </div>
          </div>

          <div data-aos="zoom-in-up" className="lg:flex bg-[#293547] rounded-xl">
            <img
              className="object-cover w-full h-56 rounded-lg lg:w-64"
              src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />

            <div className="flex flex-col justify-between py-6 lg:mx-6 p-3">
              <a
                href="#"
                className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
              >
                How to use sticky note for problem solving
              </a>

              <span className="text-sm text-gray-500 dark:text-gray-300">
                On: 20 October 2019
              </span>
            </div>
          </div>

          <div data-aos="zoom-in-left" className="lg:flex bg-[#293547] rounded-xl">
            <img
              className="object-cover w-full h-56 rounded-lg lg:w-64"
              src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />

            <div className="flex flex-col justify-between py-6 lg:mx-6 p-3">
              <a
                href="#"
                className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
              >
                Morning routine to boost your mood
              </a>

              <span className="text-sm text-gray-500 dark:text-gray-300">
                On: 25 November 2020
              </span>
            </div>
          </div>

          <div data-aos="zoom-in-right" className="lg:flex bg-[#293547] rounded-xl">
            <img
              className="object-cover w-full h-56 rounded-lg lg:w-64"
              src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80"
              alt=""
            />

            <div className="flex flex-col justify-between py-6 lg:mx-6 p-3">
              <a
                href="#"
                className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
              >
                All the features you want to know
              </a>

              <span className="text-sm text-gray-500 dark:text-gray-300">
                On: 30 September 2020
              </span>
            </div>
          </div>
        </div>
    </section>
  )
}

export default LastPosts
