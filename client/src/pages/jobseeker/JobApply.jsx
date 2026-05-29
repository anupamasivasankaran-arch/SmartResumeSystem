import "./JobApply.css";
import { useNavigate, useLocation } from "react-router-dom";

function JobApply() {

    const navigate = useNavigate();
    const location = useLocation();

    const job = location.state?.job || {
        _id: Date.now(),
        title: "Frontend Developer",
        company: "Google",
        location: "Remote",
        salary: "₹12 LPA",
    };

    const submitApplication = () => {

        const existing =
            JSON.parse(
                localStorage.getItem("appliedJobs")
            ) || [];

        const alreadyApplied =
            existing.find(
                (item) => item._id === job._id
            );

        if (alreadyApplied) {

            alert(
                "You already applied for this job"
            );

            navigate(
                "/jobseeker/applied-jobs"
            );

            return;

        }

        const application = {

            ...job,

            status: "Applied",

            appliedAt:
                new Date().toLocaleDateString(),

        };

        localStorage.setItem(

            "appliedJobs",

            JSON.stringify([
                ...existing,
                application,
            ])

        );

        alert(
            "Application Submitted Successfully"
        );

        navigate(
            "/jobseeker/applied-jobs"
        );

    };

    return (

        <div className="job-apply-page">

            <div className="job-apply-header">

                <h1>Job Application</h1>

                <p>
                    Apply for your dream company
                </p>

            </div>

            <div className="job-apply-card">

                <h2>{job.title}</h2>

                <h3>{job.company}</h3>

                <p className="location">
                    📍 {job.location}
                </p>

                <div className="job-info-grid">

                    <div className="job-info-box">

                        <span>Salary</span>

                        <h4>
                            {job.salary ||
                                "Not Specified"}
                        </h4>

                    </div>

                    <div className="job-info-box">

                        <span>Status</span>

                        <h4>Open</h4>

                    </div>

                    <div className="job-info-box">

                        <span>Type</span>

                        <h4>Full Time</h4>

                    </div>

                </div>

                <button
                    className="submit-application-btn"
                    onClick={submitApplication}
                >
                    Submit Application
                </button>

            </div>

        </div>

    );

}

export default JobApply;