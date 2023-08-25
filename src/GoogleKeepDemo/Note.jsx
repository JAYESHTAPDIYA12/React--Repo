import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';



const Note = (props) => {
    const deleteItem = () => {
        props.delete(props.id);

    }
    return (
        <>
            <div className='note'>
                <div className='note_1'>
                    <h4 >{props.title}</h4>


                    <p>{props.content}</p>
                    <Button onClick={deleteItem} className='sub'>
                        <DeleteIcon />
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Note;
