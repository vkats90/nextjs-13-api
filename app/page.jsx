'use client'

import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  function handleClick() {
    console.log('hello');
}

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          freeCodeCamp API exercise
        </h1>

        <p className={styles.description}>
          Choose any of the following Microservices:
        </p>
        <button onClick={handleClick}>Click me</button>
        <div className={styles.grid}>
          <a href="/timestamp-microservice" className={styles.card}>
            <h2>Timestamp &rarr;</h2>
            <p>Get the time in UTC and Unix</p>
          </a>

          <a
            href="/header-parser-microservice"
            className={styles.card}
          >
            <h2>Headparser &rarr;</h2>
            <p>Get you client and IP information</p>
          </a>

          <a
            href="/url-shortener-microservice"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Url Shortener &rarr;</h2>
            <p>input your url and get a shorter one</p>
          </a>
          <a
            href="/exercise-tracker"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Exercise Tracker &rarr;</h2>
            <p>Log in and track your exercises</p>
          </a>
          <a
            href="/filemetadata-microservice"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>File Metadata &rarr;</h2>
            <p>Upload a file and get information about it</p>
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
