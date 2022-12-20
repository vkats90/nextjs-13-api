'use client';

import styles from '../page.module.css'
import { useState } from 'react';

export default function exerciseTracker() {

    const [_id,setID]=useState('')
    
    const handleSubmit = async (event) => {    
        console.log('I got Here')
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data = {
            _id: event.target.uid.value,
            description: event.target.desc.value,
            duration:event.target.dur.value,
            date:event.target.date.value
        }

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
        
        // API endpoint where we send form data.
        const endpoint = '/api/'+ event.target.id +'/exercises'

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
            'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        }

        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
        alert(`Is this your full name: ${result.data}`)
    }

    function listener() {
        console.log('hello')
    }    

    function uidValue(event) {
        let id = event.target.value;
        setID(id);
        console.log(_id)
    }

    return(
        <body>
            <div className={styles.main}>
                <h1 className={styles.title}>Exercise tracker</h1>
                <button onClick={listener}>Hello</button>
                <div className={styles.grid}>
                    <form action="/api/users" method="post">
                        <fieldset>
                        <legend>Create a New User</legend>
                        <code className={styles.code}>{'POST /api/users'}</code>
                        <input id="uname" type="text" name="username" placeholder="username" />
                        <input type="submit" value="Submit" />
                        </fieldset>
                    </form>
                    <form  id="exercise-form" method="post">
                        <fieldset>
                            <legend>Add exercises</legend>
                            <p><code>POST /api/users/:_id/exercises</code></p>
                            <input id="uid" type="text" name=":_id" placeholder=":_id" onChange={uidValue} />
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
           {/*  <script>
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