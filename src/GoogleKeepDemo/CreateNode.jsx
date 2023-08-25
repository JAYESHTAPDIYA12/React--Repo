import React, { useState } from 'react';
import Button from '@mui/material/Button';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';


const CreateNode = (props) => {
    const [note, setNote] = useState({
        title: '',
        content: "",
    });

    const [expand, setExpand] = useState(false);


    const inputEvent = (event) => {

        const { name, value } = event.target;
        setNote((oldData) => {
            return {
                ...oldData,
                [name]: value,
            }
        })
    }


    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: '',
            content: "",
        })
    }

    const expandIt = () => {
        setExpand(true);
    }

    const closeIt = () => {
        setExpand(false);
    }


    return (
        <>
            <div className='main_note' onDoubleClick={closeIt}>
                <form>
                    {expand ?
                        <input
                            value={note.title}
                            name='title'
                            type='text'
                            placeholder='title'
                            onChange={inputEvent}
                            className='Input'
                            autoFocus
                        /> : null}
                    <br />
                    <textarea placeholder='Write a note' value={note.content} name='content'
                        onClick={expandIt} onChange={inputEvent} className='Textarea'></textarea>

                    {expand ?
                        <Button variant="contained" onClick={addEvent} className='add' ><FileDownloadDoneIcon /></Button> : null}

                </form>

            </div>
        </>
    )
}

export default CreateNode;
