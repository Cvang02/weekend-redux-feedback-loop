import { Link } from 'react-router-dom';

// MATERIAL UI
import Button from '@mui/material/Button';

function HomePage () {
    return (
        <div className='homeDiv'>
            <h1>YOUR FEEDBACK IS IMPORTANT</h1>
            <Link to='/feeling'>
                <Button 
                    variant="contained" 
                    color="secondary"
                    size="large"
                        >START
                </Button>
            </Link>
        </div>
    )
}

export default HomePage;