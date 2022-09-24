import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

function UnderstandingForm () {
    
    // LOCAL useState
    const [understanding, setUnderstanding] = useState('');
    
    // DISPATCH
    const dispatch = useDispatch();

    // ACTION 
    const addUnderstandingData = () => {
        const action = {
            type: 'ADD_UNDERSTANDING',
            payload: understanding
        }
        dispatch(action);
    }

    return (
        <div>
            <h1>UNDERSTANDING FORM</h1>
            <h1>How well are you understanding the content?</h1>
            <input 
                type="number"
                placeholder="Understanding?" 
                onChange={ e => setUnderstanding(e.target.value)}
            />
        <Link to='/support'>
            <button onClick={addUnderstandingData}>NEXT</button>
        </Link>
        </div>
    )
}

export default UnderstandingForm;
