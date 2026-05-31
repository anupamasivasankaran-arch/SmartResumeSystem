import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./FindJobs.css";

function FindJobs() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/api/jobs")
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSaveJob = (job) => {
    const existingJobs =
      JSON.parse(localStorage.getItem("savedJobs")) || [];

    const alreadySaved = existingJobs.find(
      (item) => item._id === job._id
    );

    if (alreadySaved) {
      alert("Job already saved");
      return;
    }

    localStorage.setItem(
      "savedJobs",
      JSON.stringify([...existingJobs, job])
    );

    alert("Job saved successfully");
  };

  const handleApply = (job) => {
    navigate("/jobseeker/job-apply", {
      state: { job },
    });
  };

  return (
    <div className="findjobs-page">

      <div className="findjobs-header">
        <h1>Find Jobs</h1>
        <p>
          Explore the latest opportunities
        </p>
      </div>

      <div className="jobs-count">
        Total Jobs Available: {jobs.length}
      </div>

      <div className="jobs-grid">

        {jobs.length === 0 ? (

          <div className="no-jobs">
            No jobs available
          </div>

        ) : (

          jobs.map((job) => (

            <div
              key={job._id}
              className="job-card"
            >

              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "15px",
                  background:
                    "linear-gradient(135deg,#4ade80,#22c55e)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  fontWeight: "700",
                  marginBottom: "15px",
                }}
              >
                {job.company?.charAt(0)}
              </div>

              <h3>{job.title}</h3>

              <p>
                <strong>Company:</strong>{" "}
                {job.company}
              </p>

              <p>
                <strong>Location:</strong>{" "}
                {job.location}
              </p>

              <p>
                <strong>Salary:</strong>{" "}
                {job.salary || "Not Specified"}
              </p>

              <p>
                <strong>Description:</strong>{" "}
                {job.description ||
                  "No Description Available"}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  marginTop: "15px",
                }}
              >
                <button
                  className="apply-btn"
                  onClick={() =>
                    handleApply(job)
                  }
                >
                  Apply Now
                </button>

                <button
                  className="save-btn"
                  onClick={() =>
                    handleSaveJob(job)
                  }
                >
                  Save Job
                </button>
              </div>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default FindJobs;