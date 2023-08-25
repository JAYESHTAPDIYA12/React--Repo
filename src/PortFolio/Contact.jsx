import React, { useState } from 'react'

const Contact = () => {
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [no, setNo] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [msg, setMsg] = useState('')


    const submit = () => {
        if (fname === "" && lname === "") {
            alert("fill your name")
        } else {
            alert(`Hello ${fname} ${lname} ! Thank you for giving Contacting us `)
        }
    }

    return (
        <>
            contact page
            <form
                onSubmit={(e) => e.preventDefault()} className="row g-3">
                <div className="col-md-6">
                    <label for="fname" className="form-label">FirstName</label>
                    <input value={fname} onChange={(e) => setFname(e.target.value)} type="text" className="form-control" id="fname" placeholder='John' />
                </div>

                <div className="col-md-6">
                    <label for="lname" className="form-label">LastName</label>
                    <input value={lname} onChange={(e) => setLname(e.target.value)} type="text" className="form-control" id="lname" placeholder='Don' />
                </div>


                <div className="col-md-12">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="inputEmail4" placeholder='email@exmaple.com' />
                </div>

                <div className="col-12">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" id="inputAddress" placeholder="house no. , street name ,local area  " />
                </div>
                <div className="col-6">
                    <label for="PhoneNumber" className="form-label">Phone Number</label>
                    <input value={no} onChange={(e) => setNo(e.target.value)} type="text" className="form-control" id="Phone Number" placeholder="12345-67890" />
                </div>
                <div className="col-md-6">
                    <label for="inputCity" className="form-label">City</label>
                    <input value={city} onChange={(e) => setCity(e.target.value)} type="text" className="form-control" id="inputCity" placeholder='Indore' />
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label">State</label>
                    <input value={state} onChange={(e) => setState(e.target.value)} type='text' className="form-control" id="state" placeholder="State Name" />

                </div>
                <div className="col-md-2">
                    <label for="inputZip" className="form-label">Zip</label>
                    <input value={zip} onChange={(e) => setZip(e.target.value)} type="text" className="form-control" id="inputZip" placeholder='455401' />
                </div>
                <div className="col-12">
                    <label for="msg" className="form-label">Message</label>
                    <input value={msg} onChange={(e) => setMsg(e.target.value)} type="text" className="form-control" id="msg" placeholder="Any Suggestion  " />
                </div>

                <div className="col-12">
                    <button type="submit" onClick={submit} className="btn btn-primary">Submit</button>
                </div>
            </form>

        </>
    )
}

export default Contact
