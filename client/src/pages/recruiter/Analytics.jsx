import "./Analytics.css";

function Analytics() {

    const monthlyData = [
        {
            month: "January",
            applications: 320,
            interviews: 120,
            hired: 25
        },
        {
            month: "February",
            applications: 280,
            interviews: 110,
            hired: 22
        },
        {
            month: "March",
            applications: 410,
            interviews: 140,
            hired: 35
        },
        {
            month: "April",
            applications: 520,
            interviews: 190,
            hired: 48
        }
    ];

    return (

        <div className="analytics-page">

            <div className="page-title">

                <h1>Recruiter Analytics</h1>

                <p>
                    Track recruitment performance,
                    hiring funnel and candidate growth
                </p>

            </div>

            <div className="analytics-cards">

                <div className="analytics-card">
                    <h2>Total Applications</h2>
                    <h1>1,248</h1>
                </div>

                <div className="analytics-card">
                    <h2>Active Jobs</h2>
                    <h1>42</h1>
                </div>

                <div className="analytics-card">
                    <h2>Interviews</h2>
                    <h1>342</h1>
                </div>

                <div className="analytics-card">
                    <h2>Candidates Hired</h2>
                    <h1>86</h1>
                </div>

            </div>

            <div className="analytics-funnel">

                <h2>Hiring Funnel</h2>

                <div className="funnel-box">

                    <div className="funnel-step">
                        Applications
                        <span>1248</span>
                    </div>

                    <div className="funnel-step">
                        Shortlisted
                        <span>420</span>
                    </div>

                    <div className="funnel-step">
                        Interviews
                        <span>210</span>
                    </div>

                    <div className="funnel-step">
                        Offers
                        <span>95</span>
                    </div>

                    <div className="funnel-step">
                        Hired
                        <span>86</span>
                    </div>

                </div>

            </div>

            <div className="analytics-report">

                <h2>Monthly Hiring Report</h2>

                <table>

                    <thead>

                        <tr>
                            <th>Month</th>
                            <th>Applications</th>
                            <th>Interviews</th>
                            <th>Hired</th>
                        </tr>

                    </thead>

                    <tbody>

                        {monthlyData.map((item) => (

                            <tr key={item.month}>

                                <td>{item.month}</td>
                                <td>{item.applications}</td>
                                <td>{item.interviews}</td>
                                <td>{item.hired}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            <div className="analytics-cards">

                <div className="analytics-card">

                    <h2>Hiring Rate</h2>

                    <h1>72%</h1>

                </div>

                <div className="analytics-card">

                    <h2>Interview Success</h2>

                    <h1>61%</h1>

                </div>

                <div className="analytics-card">

                    <h2>Time To Hire</h2>

                    <h1>14 Days</h1>

                </div>

                <div className="analytics-card">

                    <h2>Monthly Growth</h2>

                    <h1>+18%</h1>

                </div>

            </div>

        </div>

    );

}

export default Analytics;