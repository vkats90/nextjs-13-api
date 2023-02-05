'use client'

import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {


  return (
    <div className='p-6'>
      <main className='flex flex-col justify-center items-center p-16' >
        <h1 className='title font-unbounded font-bold text-4xl lg:text-6xl xl:text-7xl' >
          freeCodeCamp API exercises
        </h1>

        <p className='text my-16 leading-6 text-lg '>
          Choose any of the following Microservices:
        </p>

        <div className='grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-3' >
          <a href="/timestamp-microservice" className="m-4 p-6 text-left text-inherit hover:text-blue-600 border hover:border-blue-600 border-stone-800 rounded-lg max-w-xs ease-in-out duration-300">
            <h2 className='mb-4 text-2xl'>Timestamp &rarr;</h2>
            <p className='text-xl leading-8'>Get the time in UTC and Unix</p>
          </a>

          <a
            href="/header-parser-microservice"
            className="m-4 p-6 text-left text-inherit hover:text-blue-600 border hover:border-blue-600 border-stone-800 rounded-lg max-w-xs ease-in-out duration-300"
          >
            <h2 className='mb-4 text-2xl'>Headparser &rarr;</h2>
            <p className='text-xl leading-8'>Get you client and IP information</p>
          </a>

          <a
            href="/url-shortener-microservice"
            rel="noopener noreferrer"
            className="m-4 p-6 text-left text-inherit hover:text-blue-600 border hover:border-blue-600 border-stone-800 rounded-lg max-w-xs ease-in-out duration-300"
          >
            <h2 className='mb-4 text-2xl'>Url Shortener &rarr;</h2>
            <p className='text-xl leading-8'>input your url and get a shorter one</p>
          </a>
          <a
            href="/exercise-tracker"
            rel="noopener noreferrer"
            className="m-4 p-6 text-left text-inherit hover:text-blue-600 border hover:border-blue-600 border-stone-800 rounded-lg max-w-xs ease-in-out duration-300"
          >
            <h2 className='mb-4 text-2xl'>Exercise Tracker &rarr;</h2>
            <p className='text-xl leading-8'>Log in and track your exercises</p>
          </a>
          <a
            href="/filemetadata-microservice"
            rel="noopener noreferrer"
            className="m-4 p-6 text-left text-inherit hover:text-blue-600 border hover:border-blue-600 border-stone-800 rounded-lg max-w-xs ease-in-out duration-300"
          >
            <h2 className='mb-4 text-2xl'>File Metadata &rarr;</h2>
            <p className='text-xl leading-8'>Upload a file and get information about it</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/vkats90"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Vlad Kats
        </a>
      </footer>
    </div>
  )
}
