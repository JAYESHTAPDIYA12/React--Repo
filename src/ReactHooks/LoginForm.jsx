import { Key } from '@mui/icons-material';
import React, { useState } from 'react'

const LoginForm = () => {



    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [allEntry, setAllEntry] = useState([]);

    const dis = () => {




    }
    const submitForm = (e) => {
        e.preventDefault()
        if (email && pass) {
            const entry = { id: new Date().getTime().toString(), email, pass };
            setAllEntry([...allEntry, entry])
            console.log(allEntry)

            setEmail('');
            setPass('');
        }
        else (alert("plz fill the form"))
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label ">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </div>
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label for="inputPassword6" className="col-form-label">Password</label>
                    </div>
                    <div className="col-auto">
                        <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"
                            value={pass} onChange={(e) => { setPass(e.target.value) }}
                        />
                    </div>
                    <div className="col-auto">
                        <span id="passwordHelpInline" className="form-text">
                            Must be 8-20 characters long.
                        </span>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary" onClick={dis}>Submit</button>
            </form>

            {allEntry.map((elem) => {
                const { id, email, pass } = elem;
                return (
                    <div Key={id}>
                        <h1>{email}</h1>
                        <h1>{pass}</h1>


                    </div>)
            }
            )}
        </>
    )
}

export default LoginForm
