import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

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
        <div>
            <h1>SUPPORT FORM</h1>
            <h1>How well are you being supported?</h1>
            <input 
                type="number"
                placeholder="support?" 
                onChange={ e => setSupport(e.target.value)}
            />
        <Link to='/commentform'>
            <button onClick={addsupportData}>NEXT</button>
        </Link>
        </div>
    )
}

export default SupportForm;