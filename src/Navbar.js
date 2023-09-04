import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Polyhedron Public Blog</h1>
            <div className="links">
                <Link to="/react-blog/">Home</Link>
                <Link to="/react-blog/create">New blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;