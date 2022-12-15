import styles from '../page.module.css'

export default function FileMetadata() {
    return (
    <body>
      <div className={styles.main}>
        <h2 className={styles.title}>File Metadata Microservice</h2>
        <br />
        <p>
          Please Upload a File ...
        </p>
        <div>
          <h4 id="output"></h4>
          <form encType="multipart/form-data" method="POST" action="/api/fileanalyse">
          <fieldset>
            <legend>File Metadata</legend>
            <label for="inputfield">Choose file: </label>
            <input id="inputfield" type="file" name="upfile"/>
            <input id="button" type="submit" value="Upload"/>
          </fieldset>
          </form>
        </div>
      </div>
      <div className={styles.footer}>
        <p>
          by Vlad Kats
        </p>
      </div>
   </body>
)}