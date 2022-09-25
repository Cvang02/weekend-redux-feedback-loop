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
