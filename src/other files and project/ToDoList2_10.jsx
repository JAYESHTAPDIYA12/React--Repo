import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import ToDOList2_10_2 from './ToDOList2_10_2';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const ToDoList2_10 = () => {

    const [inputList, setInputList] = useState('');
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value)
    }
    const listOfItems = () => {
        setItems((olditems) => {
            return [...olditems, inputList]
        },
            setInputList('')
        )

    }
    return (
        <div className='main'>
            <div className='center_div'>
                <br />
                <h1 className='bg-primary text-danger-emphasis text-bg-success align-text-center text-center text-capitalize mt-5'>
                    ToDO List
                </h1>
                <br />
                <input
                    type='text'
                    value={inputList}
                    placeholder='Add a Item'
                    onChange={itemEvent}
                    className='text-capitalize text-center '

                />
                <Button className='btn-outline-primary' variant="contained" color="success" onClick={listOfItems}> <AddCircleSharpIcon /></Button>

                <ol>
                    {items.map((val, index) => {
                        return (
                            <>
                                <ToDOList2_10_2 text={val}
                                    key={index}
                                    id={index}
                                // onSelect={ }

                                />
                            </>
                        )

                    })}
                </ol>

            </div>

            <div className="card">
                <div className="card-body">
                    This is some text within a card body.
                </div>
            </div>



        </div>
    )
}

export default ToDoList2_10;
