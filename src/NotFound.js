import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>SORRY!!</h2>
            <p>The page you are trying to visit don't exist</p>
            <Link to='/'>Click Here for HOME</Link>
        </div>
    );
}

export default NotFound;