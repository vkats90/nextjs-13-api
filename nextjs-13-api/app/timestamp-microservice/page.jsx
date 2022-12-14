import styles from '../page.module.css'

export default function TimestampAPI() {
    return(
    <body>
        <div className={styles.main}>
        <h1 className={styles.title}>Timestamp Microservice</h1>
        <br />
        <div className={styles.container}>
        <h3>Example Usage:</h3>
        <ul className={styles.link}>
            <li><a href="api/2015-12-25">[project url]/api/2015-12-25</a></li>
            <li><a href="api/1451001600000">[project url]/api/1451001600000</a></li>
        </ul>

        <h3>Example Output:</h3>
        <p className={styles.code}>
            <code>{'{"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}'}</code>
        </p>
        </div>
        <div clasName={styles.footer}>
        <p>
            By <a href="https://www.freecodecamp.org/">freeCodeCamp.org</a>
        </p>
        </div>
        </div>
    </body>
    )
}