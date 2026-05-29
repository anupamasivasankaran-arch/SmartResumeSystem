import "./Settings.css";
import { useNavigate } from "react-router-dom";

function Settings() {

    const navigate = useNavigate();

    const saveProfile = () => {

        alert("Profile updated successfully");

    };

    const updatePassword = () => {

        alert("Password updated successfully");

    };

    const deleteAccount = () => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete your account?"
        );

        if (confirmDelete) {

            alert("Account deleted successfully");

            navigate("/");

        }

    };

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

        <div className="settings-page">

            <div className="settings-header">

                <div>

                    <h1>Settings</h1>

                    <p>
                        Manage your profile and account settings
                    </p>

                </div>

            </div>

            <div className="settings-grid">

                {/* LEFT SIDE */}

                <div className="settings-left">

                    <div className="settings-card">

                        <h2>Profile Settings</h2>

                        <div className="input-group">

                            <label>Full Name</label>

                            <input
                                type="text"
                                placeholder="Anupama N"
                            />

                        </div>

                        <div className="input-group">

                            <label>Email Address</label>

                            <input
                                type="email"
                                placeholder="anupama@gmail.com"
                            />

                        </div>

                        <div className="input-group">

                            <label>Phone Number</label>

                            <input
                                type="text"
                                placeholder="+91 9876543210"
                            />

                        </div>

                        <button
                            className="save-btn"
                            onClick={saveProfile}
                        >
                            Save Changes
                        </button>

                    </div>

                    <div className="settings-card">

                        <h2>Security</h2>

                        <div className="input-group">

                            <label>Current Password</label>

                            <input
                                type="password"
                                placeholder="••••••••"
                            />

                        </div>

                        <div className="input-group">

                            <label>New Password</label>

                            <input
                                type="password"
                                placeholder="New Password"
                            />

                        </div>

                        <div className="input-group">

                            <label>Confirm Password</label>

                            <input
                                type="password"
                                placeholder="Confirm Password"
                            />

                        </div>

                        <button
                            className="save-btn"
                            onClick={updatePassword}
                        >
                            Update Password
                        </button>

                    </div>

                </div>

                {/* RIGHT SIDE */}

                <div className="settings-right">

                    <div className="settings-card stats-card">

                        <h2>Account Stats</h2>

                        <div className="stats-grid">

                            <div className="stat-box">

                                <h3>12</h3>

                                <p>Applied Jobs</p>

                            </div>

                            <div className="stat-box">

                                <h3>8</h3>

                                <p>Saved Jobs</p>

                            </div>

                            <div className="stat-box">

                                <h3>24</h3>

                                <p>Messages</p>

                            </div>

                            <div className="stat-box">

                                <h3>92%</h3>

                                <p>ATS Score</p>

                            </div>

                        </div>

                    </div>

                    <div className="settings-card">

                        <h2>Notifications</h2>

                        <div className="toggle-item">

                            <span>Job Alerts</span>

                            <input type="checkbox" defaultChecked />

                        </div>

                        <div className="toggle-item">

                            <span>Recruiter Messages</span>

                            <input type="checkbox" defaultChecked />

                        </div>

                        <div className="toggle-item">

                            <span>Interview Updates</span>

                            <input type="checkbox" />

                        </div>

                    </div>

                    <div className="settings-card danger-card">

                        <h2>Danger Zone</h2>

                        <p>
                            Delete your account permanently
                        </p>

                        <button
                            className="delete-btn"
                            onClick={deleteAccount}
                        >
                            Delete Account
                        </button>

                    </div>

                    <button
                        className="logout-btn"
                        onClick={logoutUser}
                    >
                        Logout
                    </button>

                </div>

            </div>

        </div>

    );

}

export default Settings;