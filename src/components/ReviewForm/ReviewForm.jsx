import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';



function ReviewForm () {

    const feedback = useSelector((store) => store.feedbackReducer)
    // console.log('what is feedback:', feedback); ⬇️
    // {feeling: '1', understanding: '1', support: '1', comments: 'good'}

    // LOCAL useState
    const [feeling, setFeeling] = useState('');
    const [understanding, setUnderstanding] = useState('');
    const [support, setSupport] = useState('');
    const [comments, setComments] = useState('');

    // OUR DATA THAT WE WANT TO PASS
    const feedbackData = {
        feeling: feeling,
        understanding: understanding, 
        support: support, 
        comments: comments
    }

    // POST AXIOS ROUTE
    const submitFeedbackForm = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedback
        })
        .then((postResponse) => {
            console.log('CLIENT POST SUCCESS:', postResponse);
        })
        .catch((postError) => {
            console.log('CLIENT POST UNSUCCESS:', postError);
        })

    } // END OF submitFeedbackForm

    const dispatch = useDispatch();

    const addfeedback = () => {
        const action ={
            type: 'ADD_FEEDBACK',
            payload: feedbackData
        }
        dispatch(action);
    }


    return (
        <div>
            <h1>REVIEW FORM</h1>
            <h1>Review Your Feedback</h1>
            <input type="number" placeholder="Feeling?" onChange={ e => setFeeling(e.target.value)}/>
            <input type="number" placeholder="Understanding?" onChange={ e => setUnderstanding(e.target.value)} />
            <input type="number" placeholder="Support?" onChange={ e => setSupport(e.target.value)} />
            <input type="text" placeholder="Comments?" onChange={ e => setComments(e.target.value)} />
            <button onClick={addfeedback}>add feedback</button>
            <button onClick={submitFeedbackForm}>SUBMIT</button>
        </div>
    )
}

export default ReviewForm;