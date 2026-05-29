import { Link } from "react-router-dom";

function Navbar() {

    return (

        <nav className="navbar">

            <h1 className="logo">ResumeAI</h1>

            <div className="navLinks">

                <a href="#features">Features</a>
                <a href="#works">How It Works</a>
                <a href="#companies">Companies</a>
                <a href="#testimonials">Testimonials</a>

            </div>

            <div>

                <Link to="/login">
                    <button className="loginBtn">Login</button>
                </Link>

                <Link to="/register">
                    <button className="registerBtn">Register</button>
                </Link>

            </div>

        </nav>

    )

}

export default Navbar;