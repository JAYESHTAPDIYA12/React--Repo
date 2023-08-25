import React, { useState } from 'react';

const Forms6 = () => {
    // const [name, setName] = useState("");
    // const [lname, setLname] = useState("");
    // const [age, setAge] = useState("");
    // const [textarea, setTextarea] = useState("");
    // const [fullname, setFullname] = useState("");



    const [data, setData] = useState({
        name: "",
        lname: "",
        age: "",
        textarea: "",
        phone: "",
    });

    const handleSubmit = () => {
        console.log(data);

        alert(`your name is ${data.name} ${data.lname} and your age is ${data.age} and your address ${data.textarea}`)

    }


    return (
        <>

            <form onSubmit={handleSubmit}>
                <h1 > Hello </h1>

                <label>Enter Your Name:
                    <input
                        type='text'
                        value={data.name}
                        onChange={(e) => {
                            setData({
                                ...data,
                                name: e.target.value,
                            });
                        }}
                        name='fname'
                        placeholder='Jayesh'
                    />

                </label>
                <br />
                <label>Enter Your Last Name:
                    <input
                        type='text'
                        value={data.lname}
                        onChange={(e) => {
                            setData({
                                ...data,
                                lname: e.target.value
                            })
                        }}
                        name='lname'
                        placeholder='Tapdiya'

                    />

                </label>
                <br />
                <label>Enter Your Age:
                    <input type='number'
                        value={data.age}
                        onChange={(e) => {
                            setData({
                                ...data,
                                age: e.target.value
                            })
                        }}
                        name='age'
                        placeholder='25'

                    />

                </label>
                <br />
                <label>Address:
                    <textarea placeholder='house no, street,area,city,state,country' value={data.textarea}
                        onChange={(e) => {
                            setData({
                                ...data,
                                textarea: e.target.value
                            })
                        }}
                        name='address'></textarea>

                </label>
                <br />
                <label>Entre Your mobile No.
                    <input
                        type='number'
                        value={data.phone}
                        placeholder='Enter your phone number'
                        onChange={(e) => {
                            setData({
                                ...data,
                                phone: e.target.value
                            })
                        }}
                        name='phone'
                    />

                </label>
                <br />
                <button >Click To Submit</button>
            </form>



        </>
    )
}

export default Forms6;



