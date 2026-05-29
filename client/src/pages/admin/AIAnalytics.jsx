import { useState } from "react";
import "./AIAnalytics.css";

function AIAnalytics() {

    const [activePage, setActivePage] =
        useState("");

    const [allAnalysis, setAllAnalysis] =
        useState(false);

    const aiData = [
        {
            candidate: "Anupama",
            match: "Frontend Developer",
            skills: "React, UI Design",
            status: "Matched",
        },

        {
            candidate: "Rahul",
            match: "Python Developer",
            skills: "Django, AI",
            status: "Matched",
        },

        {
            candidate: "Meera",
            match: "UI/UX Designer",
            skills: "Figma, Adobe XD",
            status: "Pending",
        },
    ];

    return (

        <div className="ai-page">

            {/* TOP CARDS */}

            <div className="top-cards">

                <div className="card">
                    <h3>AI Resume Scans</h3>
                    <h1>12,842</h1>
                </div>

                <div className="card">
                    <h3>Job Match Accuracy</h3>
                    <h1>94%</h1>
                </div>

                <div className="card">
                    <h3>Skills Analyzed</h3>
                    <h1>28,421</h1>
                </div>

                <div className="card">
                    <h3>Recommendations</h3>
                    <h1>8,932</h1>
                </div>

            </div>

            {/* AI PERFORMANCE */}

            <div className="performance-box">

                <div className="section-header">

                    <h2>AI Performance Overview</h2>

                    <button
                        className="export-btn"
                        onClick={() =>
                            setActivePage("export")
                        }
                    >
                        Export
                    </button>

                </div>

                <div className="performance-content">

                    <div className="circle-box">

                        <div className="circle">
                            <h1>94%</h1>
                            <p>Accuracy</p>
                        </div>

                    </div>

                    <div className="performance-text">

                        <p>
                            ✔ Resume Matching - 94%
                        </p>

                        <p>
                            ✔ Skill Detection - 89%
                        </p>

                        <p>
                            ✔ Job Recommendation - 91%
                        </p>

                    </div>

                </div>

            </div>

            {/* RECENT AI ANALYSIS */}

            <div className="analysis-table">

                <div className="section-header">

                    <h2>Recent AI Analyses</h2>

                    <button
                        className="view-btn"
                        onClick={() =>
                            setAllAnalysis(!allAnalysis)
                        }
                    >
                        {allAnalysis
                            ? "Hide"
                            : "View All"}
                    </button>

                </div>

                <table>

                    <thead>

                        <tr>
                            <th>Candidate</th>
                            <th>Job Match</th>
                            <th>Skills</th>
                            <th>Status</th>
                        </tr>

                    </thead>

                    <tbody>

                        {(allAnalysis
                            ? aiData
                            : aiData.slice(0, 2)
                        ).map((item, index) => (

                            <tr key={index}>

                                <td>{item.candidate}</td>

                                <td>{item.match}</td>

                                <td>{item.skills}</td>

                                <td>

                                    <span
                                        className={
                                            item.status ===
                                                "Matched"
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

            {/* AI QUICK ACTIONS */}

            <div className="quick-actions">

                <h2>AI Quick Actions</h2>

                <div className="quick-grid">

                    <button
                        onClick={() =>
                            setActivePage("analyze")
                        }
                    >
                        Analyze Resume
                    </button>

                    <button
                        onClick={() =>
                            setActivePage("report")
                        }
                    >
                        Generate Report
                    </button>

                    <button
                        onClick={() =>
                            setActivePage(
                                "recommendation"
                            )
                        }
                    >
                        AI Recommendations
                    </button>

                    <button
                        onClick={() =>
                            setActivePage("download")
                        }
                    >
                        Download Analytics
                    </button>

                </div>

            </div>

            {/* SYSTEM USAGE */}

            <div className="system-box">

                <div className="section-header">

                    <h2>System Usage</h2>

                    <button
                        className="details-btn"
                        onClick={() =>
                            setActivePage("details")
                        }
                    >
                        Details
                    </button>

                </div>

                <div className="usage-item">

                    <div className="usage-text">

                        <span>CPU Usage</span>
                        <span>68%</span>

                    </div>

                    <div className="bar">

                        <div
                            className="fill"
                            style={{ width: "68%" }}
                        ></div>

                    </div>

                </div>

                <div className="usage-item">

                    <div className="usage-text">

                        <span>AI Requests</span>
                        <span>12.8K</span>

                    </div>

                    <div className="bar">

                        <div
                            className="fill"
                            style={{ width: "90%" }}
                        ></div>

                    </div>

                </div>

                <div className="usage-item">

                    <div className="usage-text">

                        <span>Cloud Storage</span>
                        <span>826GB</span>

                    </div>

                    <div className="bar">

                        <div
                            className="fill"
                            style={{ width: "82%" }}
                        ></div>

                    </div>

                </div>

            </div>

            {/* SEPARATE PAGES */}

            <div className="result-section">

                {/* EXPORT */}

                {activePage === "export" && (

                    <div className="result-card">

                        <h2>Analytics Export</h2>

                        <p>
                            AI analytics report generated
                            successfully.
                        </p>

                        <button
                            className="download-btn"
                            onClick={() => {

                                const content = `
AI Analytics Report

Resume Matching : 94%
Skill Detection : 89%
Job Recommendation : 91%
                `;

                                const blob = new Blob(
                                    [content],
                                    {
                                        type: "text/plain",
                                    }
                                );

                                const link =
                                    document.createElement("a");

                                link.href =
                                    URL.createObjectURL(blob);

                                link.download =
                                    "AI-Analytics.txt";

                                link.click();
                            }}
                        >
                            Download Report
                        </button>

                    </div>

                )}

                {/* ANALYZE */}

                {activePage === "analyze" && (

                    <div className="result-card">

                        <h2>Resume Analysis</h2>

                        <p>
                            ✔ Resume scanned using AI
                        </p>

                        <p>
                            ✔ Match Accuracy : 94%
                        </p>

                        <p>
                            ✔ Recommended for Frontend
                            Developer
                        </p>

                    </div>

                )}

                {/* REPORT */}

                {activePage === "report" && (

                    <div className="result-card">

                        <h2>Generated Report</h2>

                        <p>
                            AI generated full candidate
                            report successfully.
                        </p>

                        <p>
                            Skill Detection : Excellent
                        </p>

                        <p>
                            Resume Quality : High
                        </p>

                    </div>

                )}

                {/* RECOMMENDATIONS */}

                {activePage ===
                    "recommendation" && (

                        <div className="result-card">

                            <h2>AI Recommendations</h2>

                            <ul>

                                <li>
                                    Improve Backend Skills
                                </li>

                                <li>
                                    Add Real-Time Projects
                                </li>

                                <li>
                                    Learn Cloud Computing
                                </li>

                                <li>
                                    Improve Communication
                                </li>

                            </ul>

                        </div>

                    )}

                {/* DOWNLOAD */}

                {activePage === "download" && (

                    <div className="result-card">

                        <h2>Download Analytics</h2>

                        <p>
                            Download complete analytics
                            report.
                        </p>

                        <button
                            className="download-btn"
                            onClick={() => {

                                const analytics = `
AI Analytics

CPU Usage : 68%
AI Requests : 12.8K
Cloud Storage : 826GB
                `;

                                const blob = new Blob(
                                    [analytics],
                                    {
                                        type: "text/plain",
                                    }
                                );

                                const link =
                                    document.createElement("a");

                                link.href =
                                    URL.createObjectURL(blob);

                                link.download =
                                    "Analytics.txt";

                                link.click();
                            }}
                        >
                            Download Now
                        </button>

                    </div>

                )}

                {/* DETAILS */}

                {activePage === "details" && (

                    <div className="result-card">

                        <h2>System Usage Details</h2>

                        <p>
                            CPU Usage : 68%
                        </p>

                        <p>
                            AI Requests : 12.8K
                        </p>

                        <p>
                            Cloud Storage : 826GB
                        </p>

                        <p>
                            Server Status : Excellent
                        </p>

                    </div>

                )}

            </div>

        </div>
    );
}

export default AIAnalytics;