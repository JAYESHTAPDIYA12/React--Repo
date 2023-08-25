import React, { useState } from 'react';
import Todolist7_2 from './Todolist7_2';

const TodoList7 = () => {

    const [inputlist, setInputList] = useState();
    const [items, setItems] = useState([]); //items show karne ke liye array chaiye ye vo hai



    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listitems = () => {
        setItems((olditems) => {
            return [...olditems, inputlist]
        })
        setInputList('');
    };

    const deleteItems = (id) => {
        setItems((olditems) => {
            return (
                olditems.filter((arrElem, index) => {
                    return index !== id
                })
            )

        })
    };



    return (
        <>
            <div className='main'>
                <div className='centre_div'>
                    <br />
                    <h1 className='headingTodo'>
                        ToDo List
                    </h1>
                    <br />
                    <input
                        type='text'
                        placeholder='Add Item'
                        value={inputlist}
                        onChange={itemEvent}

                    />
                    <button onClick={listitems} className='additem'> + </button>
                    <br />

                    <ol>

                        {items.map((itemval, index) => {
                            return (
                                <Todolist7_2
                                    key={index}
                                    id={index}
                                    text={itemval}
                                    onSelect={deleteItems}

                                />
                            )
                        })}

                    </ol>
                </div>
            </div>
        </>
    )
}

export default TodoList7;
