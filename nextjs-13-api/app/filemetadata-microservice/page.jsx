import styles from '../page.module.css'

export default function FileMetadata() {
    return (
    <body>
      <div className={styles.main}>
        <h2 className={styles.title}>API Project: File Metadata Microservice</h2>
        <br />
        <h3>Usage:</h3>
        <p>
          Please Upload a File ...
        </p>
        <div className={styles.card}>
          <h4 id="output"></h4>
          <form encType="multipart/form-data" method="POST" action="/api/fileanalyse">
            <input id="inputfield" type="file" name="upfile"/>
            <input id="button" type="submit" value="Upload"/>
          </form>
        </div>
      </div>
      <div className={styles.footer}>
        <p>
          by 
          <a href="http://www.freecodecamp.com">freeCodeCamp</a>
        </p>
      </div>
   </body>
)}