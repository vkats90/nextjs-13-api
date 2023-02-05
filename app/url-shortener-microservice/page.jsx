import styles from '../page.module.css'

export default function UrlShortenerUI () {
    return(
        <body>
            <div className={styles.container}>
                <main className={styles.main}>
                <h1 className={styles.title}>URL Shortener Microservice</h1>
                <section>
                    <form action="/api/shorturl" method="post">
                    <fieldset>
                        <legend>URL Shortener</legend>
                        <label htmlFor="url_input">URL: </label>
                        <input id="url_input" type="text" name="url" placeholder="https://www.freecodecamp.org/" />
                        <input type="submit" value="POST URL" />
                    </fieldset>
                    </form>
                </section>
                </main>
                <footer className={styles.footer}>
                <p>By Vlad Kats</p>
                </footer>
            </div>
        </body>
    )
}