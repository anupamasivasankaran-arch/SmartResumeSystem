import "./GenerateReport.css";

function GenerateReport() {

    const downloadReport = () => {

        const report = `
SMART RESUME ANALYZER REPORT

Total Applications : 12,540
Resumes Uploaded   : 2,845
Companies          : 342
AI Accuracy        : 95%

Monthly Growth : +18%
User Satisfaction : 96%
Recruiter Growth : +12%
`;

        const blob = new Blob(
            [report],
            { type: "text/plain" }
        );

        const link = document.createElement("a");

        link.href = URL.createObjectURL(blob);

        link.download = "monthly-report.txt";

        link.click();

    };

    return (

        <div className="report-page">

            <div className="report-container">

                {/* HEADER */}

                <div className="report-header">

                    <div>

                        <h1>Generate Reports</h1>

                        <p>
                            Smart Resume Analyzer & Job Recommendation System
                        </p>

                    </div>

                    <button
                        className="download-btn"
                        onClick={downloadReport}
                    >
                        Download Report
                    </button>

                </div>

                {/* STATISTICS */}

                <div className="stats-grid">

                    <div className="stat-card">
                        <h2>12,540</h2>
                        <p>Total Applications</p>
                    </div>

                    <div className="stat-card">
                        <h2>2,845</h2>
                        <p>Resumes Uploaded</p>
                    </div>

                    <div className="stat-card">
                        <h2>342</h2>
                        <p>Companies</p>
                    </div>

                    <div className="stat-card">
                        <h2>95%</h2>
                        <p>AI Accuracy</p>
                    </div>

                </div>

                {/* REPORT SECTION */}

                <div className="report-grid">

                    {/* LEFT */}

                    <div className="report-card">

                        <h2>Monthly Performance</h2>

                        <div className="progress-item">

                            <div className="progress-title">
                                <span>Applications Growth</span>
                                <span>82%</span>
                            </div>

                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: "82%" }}
                                ></div>
                            </div>

                        </div>

                        <div className="progress-item">

                            <div className="progress-title">
                                <span>Recruiter Activity</span>
                                <span>67%</span>
                            </div>

                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: "67%" }}
                                ></div>
                            </div>

                        </div>

                        <div className="progress-item">

                            <div className="progress-title">
                                <span>User Satisfaction</span>
                                <span>96%</span>
                            </div>

                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: "96%" }}
                                ></div>
                            </div>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="report-card">

                        <h2>AI Report Summary</h2>

                        <div className="summary-box">

                            <div className="summary-item">
                                <h3>+18%</h3>
                                <p>Monthly Growth</p>
                            </div>

                            <div className="summary-item">
                                <h3>95%</h3>
                                <p>AI Match Accuracy</p>
                            </div>

                            <div className="summary-item">
                                <h3>1,248</h3>
                                <p>New Users</p>
                            </div>

                            <div className="summary-item">
                                <h3>342</h3>
                                <p>Companies</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default GenerateReport;