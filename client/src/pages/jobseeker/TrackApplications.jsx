// src/pages/jobseeker/TrackApplications.jsx

import "./TrackApplications.css"

function TrackApplications({

  setActiveMenu

}) {

  return(

    <div className="tracking-page">

      {/* HEADER */}

      <div className="tracking-header">

        <div>

          <h1>

            Application Tracking

          </h1>

          <p>

            Monitor your hiring process and recruiter updates

          </p>

        </div>

        <div className="tracking-status">

          Active

        </div>

      </div>

      {/* MAIN CARD */}

      <div className="tracking-card">

        {/* TOP */}

        <div className="tracking-top">

          <div className="tracking-logo">

            G

          </div>

          <div>

            <h2>

              Frontend Developer

            </h2>

            <p>

              Google • Bangalore • India

            </p>

          </div>

        </div>

        {/* STEPS */}

        <div className="tracking-steps">

          <div className="tracking-step completed-step">

            ✓ Applied

          </div>

          <div className="tracking-line active-line"></div>

          <div className="tracking-step review-step">

            Under Review

          </div>

          <div className="tracking-line"></div>

          <div className="tracking-step">

            Interview

          </div>

          <div className="tracking-line"></div>

          <div className="tracking-step">

            Selected

          </div>

        </div>

        {/* DETAILS */}

        <div className="tracking-details-grid">

          <div className="tracking-detail-card">

            <h3>

              ATS Screening

            </h3>

            <p>

              Your resume matched 92% with the job description.

            </p>

          </div>

          <div className="tracking-detail-card">

            <h3>

              Recruiter Review

            </h3>

            <p>

              Recruiter is reviewing your skills and projects.

            </p>

          </div>

          <div className="tracking-detail-card">

            <h3>

              Expected Update

            </h3>

            <p>

              Usually within 3-5 business days.

            </p>

          </div>

        </div>

        {/* ACTIVITY */}

        <div className="activity-section">

          <h2>

            Recent Activity

          </h2>

          <div className="activity-list">

            <div className="activity-item">

              <div className="activity-dot green-dot"></div>

              <div>

                <h4>

                  Application Submitted

                </h4>

                <p>

                  2 days ago

                </p>

              </div>

            </div>

            <div className="activity-item">

              <div className="activity-dot blue-dot"></div>

              <div>

                <h4>

                  Resume Screened

                </h4>

                <p>

                  ATS Score 92%

                </p>

              </div>

            </div>

            <div className="activity-item">

              <div className="activity-dot yellow-dot"></div>

              <div>

                <h4>

                  Recruiter Reviewing

                </h4>

                <p>

                  In Progress

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* BUTTONS */}

        <div className="tracking-buttons">

          {/* DOWNLOAD */}

          <button

            className="download-btn"

            onClick={() => {

              const link =
              document.createElement("a")

              link.href =
              "/resume.pdf"

              link.download =
              "MyResume.pdf"

              link.click()

            }}

          >

            Download Resume

          </button>

          {/* BACK */}

          <button

            className="back-btn"

            onClick={() =>

              setActiveMenu("applied")

            }

          >

            Back To Applied Jobs

          </button>

        </div>

      </div>

    </div>

  )

}

export default TrackApplications