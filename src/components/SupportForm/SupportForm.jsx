import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

// MATERIAL UI
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function SupportForm () {    
    
    // LOCAL useState
    const [support, setSupport] = useState('');
    
    // DISPATCH
    const dispatch = useDispatch();

    // ACTION 
    const addsupportData = () => {
        if (!support) {
            alert('Number must be imput or else support input will be default to 0');
        }
        else {
        const action = {
            type: 'ADD_SUPPORT',
            payload: support
        }
        dispatch(action);
        }
    }

    return (
        <div className="supportDiv">
            <h1>How well are you being supported?</h1>
            <Box
                component="form"
                sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
                noValidate
                autoComplete="off">
                <TextField 
                    id="outlined-basic" 
                    label="Support?" 
                    variant="outlined" 
                    color="secondary"
                    onChange={ e => setSupport(e.target.value)}
                    type="number"
                />
            </Box>
        <Link to='/commentform'>
            <Button 
                onClick={addsupportData}
                variant="contained" 
                color="secondary"
                size="large"
                    >NEXT
            </Button>
        </Link>
        </div>
    )
}

export default SupportForm;