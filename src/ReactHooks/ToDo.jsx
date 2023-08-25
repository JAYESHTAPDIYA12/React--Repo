import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';


const localGetItems = () => {
    const list = localStorage.getItem('lists')
    if (list) {
        return JSON.parse(localStorage.getItem('lists'))
    } else {
        return [];
    }
}

const ToDo = () => {


    const [input, setInput] = useState();
    const [items, setItems] = useState(localGetItems);
    const [toogleSubmit, setToogleSubmit] = useState(true);
    const [isItemId, setIsItemId] = useState(null);


    const addItems = () => {
        if (!input) {
            alert("write something to add ")

        } else if (input && !toogleSubmit) {
            setItems(
                items.map((curr) => {
                    if (curr.id === isItemId) {
                        return ({ ...curr, name: input })
                    }
                    return curr;
                }))
            setToogleSubmit(true);
            setInput('')
            setIsItemId()
        }
        else {
            const allInputData = { id: new Date().getTime().toString(), name: input }
            setItems([...items, allInputData]);
            setInput('')
        }
    }

    const deleteItems = (id) => {
        const upItems = items.filter((curr) => {
            return id !== curr.id;
        })
        setItems(upItems)

    }

    const editItems = (id) => {
        let newEdit = items.find((curr) => {
            return curr.id === id;
        })
        console.log(newEdit)
        setToogleSubmit(false);
        setInput(newEdit.name)
        setIsItemId(id)

    }

    const removeAll = () => {
        setItems([])
    }

    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(items))
    }, [items])


    // This is the img we use;
    const img = "https://th.bing.com/th/id/OIP.uqi4Pm5s5qLc2GCCtZ7_ygHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7"


    return (
        <>
            <div className='Main_div .bg-success  --bs-secondary-rgb: 108, 117, 125;  border --bs-light-border-subtle' >
                <div className='Todo_div text-center bg-gradient mt-5 p-5'>
                    <figure>
                        <img src={img} alt='todo logo' height={100} width={100} />
                        <figcaption >Add your List here </figcaption>

                    </figure>

                    {/* add items */}

                    <div className='add_items mt-3'>
                        <input type='text'
                            placeholder='Write a Item Here'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />

                        {
                            toogleSubmit ? <button onClick={addItems}><AddIcon /></button> : <button onClick={addItems}><EditIcon /></button>
                        }

                    </div>

                    {/* show items */}

                    <div className='show_items mt-2  --bs-warning --bs-warning-rgb '>


                        {
                            items.map((curr) => {
                                return (
                                    <> <div className='each_items  --bs-indigo: #6610f2 --bs-warning --bs-warning-rgb border border-primary d-flex flex-row mb-3  text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3' key={curr.id}>
                                        <h4 className='"p-2 '>{curr.name}</h4>
                                        <button className=' btn  effect04 border border-info p-2 d-flex justify-content-between"' onClick={() => editItems(curr.id)} data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="delete  items">
                                            <EditIcon />
                                        </button>
                                        <button className=' btn  effect04 4 border border-danger p-2 d-flex justify-content-between"' onClick={() => deleteItems(curr.id)} data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="delete  items">
                                            <DeleteForeverIcon />
                                        </button>
                                    </div>

                                    </>
                                )
                            })
                        }

                    </div>

                    <div className=''>
                        <button className=' btn  effect04' onClick={removeAll} >
                            <span> Delete All </span>
                        </button>
                    </div>

                </div>

            </div>





        </>
    )
}

export default ToDo;
