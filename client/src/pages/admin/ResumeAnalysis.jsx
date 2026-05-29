import { useState } from "react";
import "./ResumeAnalysis.css";

function ResumeAnalysis() {

    const [activePage, setActivePage] = useState("");

    const [uploadedFile, setUploadedFile] =
        useState(null);

    const resumeData = [
        {
            candidate: "Anupama",
            skills: "React, JavaScript, UI Design",
            score: 94,
            status: "Matched",
        },

        {
            candidate: "Rahul",
            skills: "Python, Django, AI",
            score: 89,
            status: "Matched",
        },

        {
            candidate: "Meera",
            skills: "Figma, UX Research",
            score: 76,
            status: "Pending",
        },
    ];

    return (

        <div className="resume-page">

            {/* TOP CARDS */}

            <div className="top-cards">

                <div className="card">
                    <h3>Total Resumes</h3>
                    <h1>2,842</h1>
                </div>

                <div className="card">
                    <h3>AI Analyzed</h3>
                    <h1>2,104</h1>
                </div>

                <div className="card">
                    <h3>Matched Profiles</h3>
                    <h1>1,628</h1>
                </div>

                <div className="card">
                    <h3>Accuracy</h3>
                    <h1>94%</h1>
                </div>

            </div>

            {/* RESUME TABLE */}

            <div className="resume-table">

                <div className="table-header">

                    <h2>Resume Analysis</h2>

                    <button
                        className="upload-btn"
                        onClick={() => setActivePage("upload")}
                    >
                        Upload Resume
                    </button>

                </div>

                <table>

                    <thead>
                        <tr>
                            <th>Candidate</th>
                            <th>Skills</th>
                            <th>Match Score</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>

                        {resumeData.map((item, index) => (

                            <tr key={index}>

                                <td>{item.candidate}</td>

                                <td>{item.skills}</td>

                                <td>{item.score}%</td>

                                <td>

                                    <span
                                        className={
                                            item.status === "Matched"
                                                ? "matched"
                                                : "pending"
                                        }
                                    >
                                        {item.status}
                                    </span>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            {/* QUICK ACTIONS */}

            <div className="quick-actions">

                <h2>Quick Actions</h2>

                <div className="quick-grid">

                    <button
                        onClick={() => setActivePage("analyze")}
                    >
                        Analyze Resume
                    </button>

                    <button
                        onClick={() => setActivePage("download")}
                    >
                        Download Report
                    </button>

                    <button
                        onClick={() =>
                            setActivePage("recommendation")
                        }
                    >
                        AI Recommendations
                    </button>

                    <button
                        onClick={() => setActivePage("insights")}
                    >
                        Generate Insights
                    </button>

                </div>

            </div>

            {/* SEPARATE PAGE */}

            <div className="page-content">

                {/* UPLOAD PAGE */}

                {activePage === "upload" && (

                    <div className="action-page">

                        <h2>Upload Resume</h2>

                        <div className="result-card">

                            <input
                                type="file"
                                className="file-input"
                                onChange={(e) =>
                                    setUploadedFile(
                                        e.target.files[0]
                                    )
                                }
                            />

                            <button
                                className="download-btn"
                                onClick={() =>
                                    setActivePage("uploaded")
                                }
                            >
                                Upload Now
                            </button>

                        </div>

                    </div>

                )}

                {/* UPLOAD SUCCESS */}

                {activePage === "uploaded" && (

                    <div className="action-page">

                        <h2>Resume Uploaded Successfully</h2>

                        <div className="result-card">

                            <p>
                                File Name :
                                {uploadedFile
                                    ? uploadedFile.name
                                    : " Resume.pdf"}
                            </p>

                            <p>
                                AI Resume System stored
                                your resume successfully.
                            </p>

                        </div>

                    </div>

                )}

                {/* ANALYZE PAGE */}

                {activePage === "analyze" && (

                    <div className="action-page">

                        <h2>AI Resume Analysis</h2>

                        <div className="result-card">

                            <h3>Candidate Skills</h3>

                            <p>
                                React, JavaScript, UI Design
                            </p>

                            <h3>AI Match Score</h3>

                            <p>94%</p>

                            <h3>Status</h3>

                            <p>Highly Recommended</p>

                        </div>

                    </div>

                )}

                {/* DOWNLOAD REPORT */}

                {activePage === "download" && (

                    <div className="action-page">

                        <h2>Download Resume Report</h2>

                        <div className="result-card">

                            <p>
                                Your AI Resume Report is
                                ready.
                            </p>

                            <button
                                className="download-btn"
                                onClick={() => {

                                    const report = `
AI Resume Report

Candidate : Anupama
Skills : React, JavaScript
AI Score : 94%
Status : Matched
                  `;

                                    const blob = new Blob(
                                        [report],
                                        {
                                            type: "text/plain",
                                        }
                                    );

                                    const link =
                                        document.createElement("a");

                                    link.href =
                                        URL.createObjectURL(blob);

                                    link.download =
                                        "Resume-Report.txt";

                                    link.click();
                                }}
                            >
                                Download Now
                            </button>

                        </div>

                    </div>

                )}

                {/* AI RECOMMENDATIONS */}

                {activePage === "recommendation" && (

                    <div className="action-page">

                        <h2>AI Recommendations</h2>

                        <div className="result-card">

                            <ul>

                                <li>
                                    Improve React Performance
                                </li>

                                <li>
                                    Learn Backend Development
                                </li>

                                <li>
                                    Add More Real Projects
                                </li>

                                <li>
                                    Improve Communication
                                </li>

                            </ul>

                        </div>

                    </div>

                )}

                {/* INSIGHTS */}

                {activePage === "insights" && (

                    <div className="action-page">

                        <h2>Generated Insights</h2>

                        <div className="result-card">

                            <p>
                                ✔ Resume Accuracy : 94%
                            </p>

                            <p>
                                ✔ Skill Detection : 91%
                            </p>

                            <p>
                                ✔ Hiring Chance : High
                            </p>

                            <p>
                                ✔ AI Recommendation :
                                Excellent
                            </p>

                        </div>

                    </div>

                )}

                {/* DETAILS PAGE */}

                {activePage === "details" && (

                    <div className="action-page">

                        <h2>Analysis Overview Details</h2>

                        <div className="result-card">

                            <p>
                                Daily Analyses Completed :
                                248
                            </p>

                            <p>
                                Resume Accuracy :
                                94%
                            </p>

                            <p>
                                AI Recommendations :
                                1.6K
                            </p>

                            <p>
                                System Performance :
                                Excellent
                            </p>

                        </div>

                    </div>

                )}

            </div>

            {/* ANALYSIS OVERVIEW */}

            <div className="overview-box">

                <div className="overview-header">

                    <h2>Analysis Overview</h2>

                    <button
                        className="details-btn"
                        onClick={() =>
                            setActivePage("details")
                        }
                    >
                        Details
                    </button>

                </div>

                <div className="progress-item">

                    <div className="progress-text">

                        <span>Daily Analyses</span>

                        <span>248</span>

                    </div>

                    <div className="progress-bar">

                        <div
                            className="progress-fill"
                            style={{ width: "88%" }}
                        ></div>

                    </div>

                </div>

                <div className="progress-item">

                    <div className="progress-text">

                        <span>Resume Accuracy</span>

                        <span>94%</span>

                    </div>

                    <div className="progress-bar">

                        <div
                            className="progress-fill"
                            style={{ width: "94%" }}
                        ></div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ResumeAnalysis;