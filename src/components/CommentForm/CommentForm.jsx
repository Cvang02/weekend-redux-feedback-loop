import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

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
        <div>
            <h1>COMMENT FORM</h1>
            <h1>Any comments you want to leave?</h1>
            <input 
                type="text"
                placeholder="comments?" 
                onChange={ e => setComments(e.target.value)}
            />
        <Link to='/review'>
            <button onClick={addCommentsData}>NEXT</button>
        </Link>
        </div>
    )
}

export default CommentForm;