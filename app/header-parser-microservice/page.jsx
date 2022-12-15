import styles from '../page.module.css'

export default function HeaderParser () {
return(
<body>
      <div className={styles.main}>
        <h2 className={styles.title}>Request Header Parser Microservice</h2>
        <br />
        <h3>Example Usage:</h3>
        <p className={styles.link}>
          <a href="api/whoami">[base url]/api/whoami</a>
        </p>

        <h3>Example Output:</h3>
        <p className={styles.code}>
          <code>{'{"ipaddress":"::ffff:159.20.14.100","language":"en-US,en;q=0.5",<br>"software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}'}</code>
        </p>
      </div>
      <div className={styles.footer}>
        <p>
          by Vlad Kats
        </p>
      </div>
   </body>
)}