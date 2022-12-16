import styles from '../page.module.css'

export default function exerciseTracker() {
    return(
        <body>
            <div className={styles.main}>
                <h1 className={styles.title}>Exercise tracker</h1>
                <div className={styles.grid}>
                    <form action="/api/users" method="post">
                        <fieldset>
                        <legend>Create a New User</legend>
                        <code className={styles.code}>{'POST /api/users'}</code>
                        <input id="uname" type="text" name="username" placeholder="username" />
                        <input type="submit" value="Submit" />
                        </fieldset>
                    </form>
                    <form id="exercise-form" method="post">
                        <fieldset>
                            <legend>Add exercises</legend>
                            <p><code>POST /api/users/:_id/exercises</code></p>
                            <input id="uid" type="text" name=":_id" placeholder=":_id" />
                            <input id="desc" type="text" name="description" placeholder="description*" />
                            <input id="dur" type="text" name="duration" placeholder="duration* (mins.)" />
                            <input id="date" type="text" name="date" placeholder="date (yyyy-mm-dd)" />
                            <input type="submit" value="Submit" />
                        </fieldset>
                    </form>
                </div>
                <p>
                    <strong>GET user's exercise log: </strong>
                    <code className={styles.code}>{'GET /api/users/:_id/logs?[from][&amp;to][&amp;limit]'}</code>
                </p>
                <p><strong>[ ]</strong> = optional</p>
                <p><strong>from, to</strong> = dates (yyyy-mm-dd); <strong>limit</strong> = number</p>
            </div>
           {/* } <script>
            const exerciseForm = document.getElementById("exercise-form");

            exerciseForm.addEventListener("submit", () => {
                const userId = document.getElementById("uid").value;
                exerciseForm.action = `/api/users/${userId}/exercises`;

                exerciseForm.submit();
            });
        </script> */}
        </body>
    )
}