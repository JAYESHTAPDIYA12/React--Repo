import React, { useState } from 'react';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import Button from '@mui/material/Button';


const ToDOList2_10_2 = (props) => {
    const [line, setLine] = useState(false)
    const cutIt = () => {
        setLine(true)

    }
    return (
        <div>
            <Button variant="outlined" color="error" onClick={cutIt}><DeleteForeverRoundedIcon /></Button>
            <li style={{ textDecoration: line ? "line-through" : "none" }}> {props.text} </li>
        </div>
    )
}

export default ToDOList2_10_2;


