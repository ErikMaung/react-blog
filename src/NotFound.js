import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry!</h2>
            <p>Error 404: That page cannot be found.</p>
            <div className="links">
                <Link to="/react-blog/">Click to Return Home</Link>
            </div>
        </div>
    );
}
 
export default NotFound;