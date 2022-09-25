import { Link } from 'react-router-dom';

function HomePage () {
    return (
        <>
        <h1>YOUR FEEDBACK IS IMPORTANT</h1>
        <Link to='/feeling'>
        <button>START</button>
        </Link>
        </> 
    )
}

export default HomePage;