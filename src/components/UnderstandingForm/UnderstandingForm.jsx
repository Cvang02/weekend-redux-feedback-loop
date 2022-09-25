import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

// MATERIAL UI
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function UnderstandingForm () {
    
    // LOCAL useState
    const [understanding, setUnderstanding] = useState('');
    
    // DISPATCH
    const dispatch = useDispatch();

    // ACTION 
    const addUnderstandingData = () => {
        if (!understanding) {
            alert('Number must be imput or else understanding input will be default to 0');
        }
        else {
        const action = {
            type: 'ADD_UNDERSTANDING',
            payload: understanding
        }
        dispatch(action);
        }
    }

    return (
        <div className="understandingDiv">
            <h1>How well are you understanding the content?</h1>
            <Box
                component="form"
                sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
                noValidate
                autoComplete="off">
                <TextField 
                    id="outlined-basic" 
                    label="Understanding?" 
                    variant="outlined" 
                    color="secondary"
                    onChange={ e => setUnderstanding(e.target.value)}
                    type="number"
                />
            </Box>
        <Link to='/support'>
            <Button 
                onClick={addUnderstandingData}
                variant="contained" 
                color="secondary"
                size="large"
                    >NEXT
            </Button>
        </Link>
        </div>
    )
}

export default UnderstandingForm;
