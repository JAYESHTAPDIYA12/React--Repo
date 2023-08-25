import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Tooltip from '@mui/material/Tooltip';
import Alert from '@mui/material/Alert';




const MordernUiCount9 = () => {
    const [count, setCount] = useState(0);

    const inc = () => {
        setCount(count + 1);
    }
    const dec = () => {
        if (count !== 0) {
            setCount(count - 1);

        }
        if (count == 0) {
            <Alert severity="error">This is an error alert — check it out!</Alert>
        }

    }




    return (
        <div>

            <br />
            <h1>{count}</h1>
            {/* B <utton variant="text"><AddIcon /></Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button> */}

            <Tooltip title="Add">
                <Button variant='outlined' onClick={inc}><AddIcon /></Button>
            </Tooltip>

            <Tooltip title="Delete">
                <Button variant='outlined' onClick={dec}><RemoveOutlinedIcon /></Button>
            </Tooltip>
            <Button><FavoriteIcon /></Button>
        </div>
    )
}



export default MordernUiCount9;
