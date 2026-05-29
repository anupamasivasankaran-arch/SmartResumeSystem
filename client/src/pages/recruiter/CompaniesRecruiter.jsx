import "./CompaniesRecruiter.css";

function CompaniesRecruiter() {

    return (

        <div className="companies-page">

            <div className="page-title">

                <h1>Companies</h1>

                <p>
                    Manage recruiter companies professionally
                </p>

            </div>

            <div className="companies-grid">

                <div className="company-card">

                    <div className="company-top">

                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                            alt=""
                        />

                        <div>

                            <h2>HireAI Technologies</h2>

                            <p>Bangalore, India</p>

                        </div>

                    </div>

                    <div className="company-stats">

                        <div className="stat-box">

                            <h3>24</h3>

                            <span>Open Jobs</span>

                        </div>

                        <div className="stat-box">

                            <h3>140</h3>

                            <span>Applications</span>

                        </div>

                    </div>

                    <button
                        onClick={() =>
                            alert("Viewing Company")
                        }
                    >
                        View Company
                    </button>

                </div>

                <div className="company-card">

                    <div className="company-top">

                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
                            alt=""
                        />

                        <div>

                            <h2>TechNova Solutions</h2>

                            <p>Kochi, India</p>

                        </div>

                    </div>

                    <div className="company-stats">

                        <div className="stat-box">

                            <h3>12</h3>

                            <span>Open Jobs</span>

                        </div>

                        <div className="stat-box">

                            <h3>82</h3>

                            <span>Applications</span>

                        </div>

                    </div>

                    <button
                        onClick={() =>
                            alert("Viewing Company")
                        }
                    >
                        View Company
                    </button>

                </div>

            </div>

        </div>

    );

}

export default CompaniesRecruiter;