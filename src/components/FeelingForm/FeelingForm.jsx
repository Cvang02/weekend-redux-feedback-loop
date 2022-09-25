import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

// MATERIAL UI
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function FeelingForm () {

    // LOCAL STATE
    const [feeling, setFeeling] = useState('');

    // DISPATCH
    const dispatch = useDispatch();

    // ACTION
    const addFeelingData = () => {
        if (!feeling) {
            alert('Number must be imput or else feeling input will be default to 0');
        }
        else {
        const action = {
            type: 'ADD_FEELING',
            payload: feeling
        }
        dispatch(action);
        }
    }

    return (
        <div className="feelingDiv">
            <h1>How are you feeling today?</h1>
            <Box
                component="form"
                sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
                noValidate
                autoComplete="off">
                <TextField 
                    id="outlined-basic" 
                    label="Feeling?" 
                    variant="outlined" 
                    color="secondary"
                    onChange={ e => setFeeling(e.target.value)}
                    type="number"
                />
            </Box>
        <Link to='/understanding'>
            <Button 
                onClick={addFeelingData}
                variant="contained" 
                color="secondary"
                size="large"
                    >NEXT
            </Button>
        </Link>
        </div>
    )
}

export default FeelingForm;