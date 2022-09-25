import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

// MATERIAL UI
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function CommentForm () {

    // LOCAL useState
    const [comments, setComments] = useState('');
    
    // DISPATCH
    const dispatch = useDispatch();

    // ACTION 
    const addCommentsData = () => {
        const action = {
            type: 'ADD_COMMENTS',
            payload: comments
        }
        dispatch(action);
    }

    return (
        <div className="commentsDiv">
            <h1>Any comments you want to leave?</h1>
            <Box
                component="form"
                sx={{'& > :not(style)': { width: 500, maxWidth: '100%',},}}
                noValidate
                autoComplete="off">
                <TextField 
                    id="outlined-basic" 
                    label="Comments?" 
                    variant="outlined" 
                    color="secondary"
                    multiline
                    rows={10}
                    onChange={ e => setComments(e.target.value)}
                    type="text"
                />
            </Box>
        <Link to='/review'>
            <Button 
                onClick={addCommentsData}
                variant="contained" 
                color="secondary"
                size="large"
                    >NEXT
            </Button>
        </Link>
        </div>
    )
}

export default CommentForm;