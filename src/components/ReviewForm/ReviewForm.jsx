import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import React from "react";

function ReviewForm () {

    const feeling = useSelector((store) => store.feelingReducer)
    const understanding = useSelector((store) => store.understandingReducer)
    const support = useSelector((store) => store.supportReducer)
    const commentSection = useSelector((store) => store.commentsReducer)


    // OUR DATA THAT WE WANT TO PASS
    const feedbackData = {
        feeling: Number(feeling),
        understanding: Number(understanding), 
        support: Number(support), 
        comments: commentSection
    }

    // POST AXIOS ROUTE
    const submitFeedbackForm = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedbackData
        })
        .then((postResponse) => {
            console.log('CLIENT POST SUCCESS:', postResponse);
            sendBackToMenu();
        })
        .catch((postError) => {
            console.log('CLIENT POST UNSUCCESS:', postError);
        })

    } // END OF submitFeedbackForm

    const dispatch = useDispatch();

    const history = useHistory();
    const sendBackToMenu = () => {
        alert('Thank you for your order!');
        history.push('/closing');
    }


    return (
        <div>
            <h1>REVIEW FORM</h1>
            <h1>Review Your Feedback</h1>
            <h2>Feeling: {feeling}</h2>
            <h2>Understanding: {understanding}</h2>
            <h2>Support: {support}</h2>
            <h2>Comments: {commentSection}</h2>
            <button onClick={submitFeedbackForm}>SUBMIT</button>
        </div>
    )
}

export default ReviewForm;