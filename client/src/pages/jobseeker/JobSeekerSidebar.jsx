import "./JobSeekerSidebar.css";
import { Link, useNavigate } from "react-router-dom";

function JobSeekerSidebar() {

    const navigate = useNavigate();

    const logoutUser = () => {

        const confirmLogout = window.confirm(
            "Are you sure you want to logout?"
        );

        if (confirmLogout) {

            alert("Logged out successfully");

            navigate("/");

        }

    };

    return (

        <div className="jobseeker-sidebar">

            <div>

                <div className="sidebar-logo">

                    <h1>HireAI</h1>

                    <p>Job Seeker Workspace</p>

                </div>

                <div className="sidebar-menu">

                    <Link
                        to="/jobseeker/dashboard"
                        className="sidebar-link"
                    >
                        🏠 Dashboard
                    </Link>

                    <Link
                        to="/jobseeker/find-jobs"
                        className="sidebar-link"
                    >
                        🔍 Find Jobs
                    </Link>

                    <Link
                        to="/jobseeker/recommended-jobs"
                        className="sidebar-link"
                    >
                        💼 Recommended Jobs
                    </Link>

                    <Link
                        to="/jobseeker/applied-jobs"
                        className="sidebar-link"
                    >
                        📄 Applied Jobs
                    </Link>

                    <Link
                        to="/jobseeker/saved-jobs"
                        className="sidebar-link"
                    >
                        💖 Saved Jobs
                    </Link>

                    <Link
                        to="/jobseeker/resume-upload"
                        className="sidebar-link"
                    >
                        📁 Resume
                    </Link>

                    <Link
                        to="/jobseeker/messages"
                        className="sidebar-link"
                    >
                        💬 Messages
                    </Link>

                    <Link
                        to="/jobseeker/settings"
                        className="sidebar-link"
                    >
                        ⚙️ Settings
                    </Link>

                </div>

            </div>

            <button
                className="logout-btn"
                onClick={logoutUser}
            >
                Logout
            </button>

        </div>

    );

}

export default JobSeekerSidebar;