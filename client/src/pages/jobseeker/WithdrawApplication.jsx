import "./WithdrawApplication.css";

import { useNavigate } from "react-router-dom";

function WithdrawApplication() {

    const navigate = useNavigate();

    /* WITHDRAW FUNCTION */

    const handleWithdraw = () => {

        navigate("/jobseeker");

    };

    return (

        <div className="withdraw-page">

            {/* HEADER */}

            <div className="withdraw-header">

                <div>

                    <h1>Withdraw Application</h1>

                    <p>
                        Cancel your submitted application professionally
                    </p>

                </div>

            </div>

            {/* CARD */}

            <div className="withdraw-card">

                {/* COMPANY */}

                <div className="withdraw-company">

                    <div className="withdraw-logo">

                        <img
                            src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                            alt=""
                        />

                    </div>

                    <div>

                        <h2>Frontend Developer</h2>

                        <h3>Google</h3>

                        <div className="withdraw-meta">

                            <span>📍 Remote</span>

                            <span>💰 ₹12 LPA</span>

                            <span>🕒 Full Time</span>

                        </div>

                    </div>

                </div>

                {/* WARNING */}

                <div className="warning-box">

                    <h4>⚠ Warning</h4>

                    <p>
                        Once you withdraw this application,
                        recruiters will no longer consider your
                        profile for this position.
                    </p>

                </div>

                {/* REASON */}

                <div className="reason-box">

                    <h4>Reason for Withdrawal</h4>

                    <textarea
                        placeholder="Write your reason here..."
                    ></textarea>

                </div>

                {/* BUTTONS */}

                <div className="withdraw-buttons">

                    <button
                        className="cancel-btn"
                        onClick={() =>
                            navigate("/jobseeker/applied-jobs")
                        }
                    >
                        Cancel
                    </button>

                    <button
                        className="withdraw-btn"
                        onClick={handleWithdraw}
                    >
                        Withdraw Application
                    </button>

                </div>

            </div>

        </div>

    );

}

export default WithdrawApplication;