import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { add, remove, clearall } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import './ToDoByRedux.css'

const ToDoR = () => {
    const dispatch = useDispatch()
    const mystate = useSelector((state) => state.ReducerToDo.list)
    const [inputData, setInputData] = useState("")
    return (
        <>

            <div className='main_div   d-flex justify-content-center'>
                <div className='todo   mt-5'>
                    <div className='heading  '>
                        <h1 className='d-flex justify-content-center'>add Items </h1>
                        <div className='add_items d-flex justify-content-center'>
                            <input type="text" placeholder='add items here' value={inputData} onChange={(e) => { setInputData((e.target.value)) }} />
                            <button type="button" class="btn btn-outline-success" onClick={() => { inputData.length > 2 ? (dispatch(add(inputData), setInputData(''))) : alert("data should have more than 3 letter") }}><AddIcon /></button>

                        </div>

                    </div>

                    <div className='show_items d-flex justify-content-center'>
                        <div className='each_item '>


                            {
                                mystate.map((ele) => {
                                    return (<div key={ele.id}>
                                        <h1>{ele.data}</h1>
                                        <button type="button" class="btn btn-outline-danger" onClick={() => { dispatch(remove(ele.id)) }}><DeleteIcon /></button>
                                    </div>
                                    )
                                })
                            }
                            <br />
                            <button type="button" class="btn btn-outline-danger d-flex justify-content-center" onClick={() => { dispatch(clearall()) }}><ClearAllIcon /></button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ToDoR;
