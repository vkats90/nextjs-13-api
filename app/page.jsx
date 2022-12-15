import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          freeCodeCamp API exercise
        </h1>

        <p className={styles.description}>
          Choose any of the following Microservices:
        </p>

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
            href="https://vercel.com/templates/next.js/app-directory?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Aniother one &rarr;</h2>
            <p>Deploy your Next.js site to a public URL with Vercel.</p>
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
