import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import React from "react";

// MATERIAL UI
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function ReviewForm () {

    const feeling = useSelector((store) => store.feelingReducer)
    const understanding = useSelector((store) => store.understandingReducer)
    const support = useSelector((store) => store.supportReducer)
    const comments = useSelector((store) => store.commentsReducer)


    // OUR DATA THAT WE WANT TO PASS
    const feedbackData = {
        feeling: Number(feeling),
        understanding: Number(understanding), 
        support: Number(support), 
        comments: comments
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
            sendBackToHomePage();
        })
        .catch((postError) => {
            console.log('CLIENT POST UNSUCCESS:', postError);
        })

    } // END OF submitFeedbackForm

    const history = useHistory();
    const sendBackToHomePage = () => {
        alert('Thank you for your Feedback!');
        history.push('/closing');
    }

    return (
        <div className="reviewDiv">
            <Card className="card" sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="div">
                            Review Your Feedback
                        </Typography>
                        <Typography  variant="h5" color="text.secondary" >
                            Feeling: {feeling}
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            Understanding: {understanding}
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            Support: {support}
                        </Typography>
                        <Typography variant="h5" color="text.secondary" >
                            Comments: {comments}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <br></br>
            <Button 
                onClick={submitFeedbackForm}
                variant="contained" 
                color="secondary"
                size="large"
                startIcon={<SaveIcon />}
                    >SUBMIT
            </Button>
        </div>
    )
}

export default ReviewForm;