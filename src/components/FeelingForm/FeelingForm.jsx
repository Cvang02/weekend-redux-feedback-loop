import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

function FeelingForm () {

    // LOCAL STATE
    const [feeling, setFeeling] = useState('');

    // DISPATCH
    const dispatch = useDispatch();

    // ACTION
    const addFeelingData = () => {
        const action = {
            type: 'ADD_FEELING',
            payload: feeling
        }
        dispatch(action);
    }

    return (
        <div>
            <h1>FEELING FORM</h1>
            <h1>How are you feeling today?</h1>
            <input 
                type="number"
                placeholder="Feeling?" 
                onChange={ e => setFeeling(e.target.value)}
            />
        <Link to='/understanding'>
            <button onClick={addFeelingData}>NEXT</button>
        </Link>
        </div>
    )
}

export default FeelingForm;