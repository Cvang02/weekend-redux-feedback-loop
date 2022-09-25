import { Link } from 'react-router-dom';

// MATERIAL UI
import Button from '@mui/material/Button';

function ClosingForm () {
    return (
        <div className='closingDiv'>
            <h1>Thank You!</h1>
            <Link to='/'>
                <Button 
                    variant="contained" 
                    color="secondary"
                    size="large"
                >
                    Leave New Feedback
                </Button>
            </Link>
        </div>
    )
}

export default ClosingForm;