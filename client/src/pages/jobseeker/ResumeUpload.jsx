import "./ResumeUpload.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ResumeUpload() {

    const navigate = useNavigate();

    const [resumeFile, setResumeFile] =
        useState(null);

    const [resumeName, setResumeName] =
        useState("");

    const handleUpload = (e) => {

        const file = e.target.files[0];

        if (file) {

            setResumeFile(file);

            setResumeName(file.name);

        }

    };

    const uploadResume = async () => {

        if (!resumeFile) {

            alert(
                "Please select a resume"
            );

            return;

        }

        try {

            const formData =
                new FormData();

            formData.append(
                "resume",
                resumeFile
            );

            await axios.post(
                "http://localhost:5000/api/resumes/upload",
                formData,
                {
                    headers: {
                        "Content-Type":
                            "multipart/form-data"
                    }
                }
            );

            localStorage.setItem(
                "resumeName",
                resumeName
            );

            alert(
                "Resume uploaded successfully"
            );

        } catch (error) {

            console.log(error);

            alert(
                "Resume upload failed"
            );

        }

    };

    const viewResume = () => {

        const savedResume =
            localStorage.getItem(
                "resumeName"
            );

        if (!savedResume) {

            alert(
                "Please upload a resume first"
            );

            return;

        }

        navigate(
            "/jobseeker/resume-details"
        );

    };

    const deleteResume = () => {

        const savedResume =
            localStorage.getItem(
                "resumeName"
            );

        if (!savedResume) {

            alert(
                "No resume found"
            );

            return;

        }

        localStorage.removeItem(
            "resumeName"
        );

        setResumeName("");

        setResumeFile(null);

        alert(
            "Resume deleted successfully"
        );

    };

    return (

        <div className="resume-page">

            <div className="resume-header">

                <div>

                    <h1>
                        Resume Upload
                    </h1>

                    <p>
                        Upload your resume and improve ATS score
                    </p>

                </div>

                <div className="ats-circle">
                    92%
                </div>

            </div>

            <div className="upload-card">

                <div className="upload-icon">
                    📄
                </div>

                <h2>
                    Resume Manager
                </h2>

                <p>
                    PDF, DOC and DOCX supported
                </p>

                <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleUpload}
                />

                {resumeName && (

                    <h4 className="file-name">
                        {resumeName}
                    </h4>

                )}

                <div
                    style={{
                        display: "flex",
                        gap: "15px",
                        justifyContent: "center",
                        flexWrap: "wrap"
                    }}
                >

                    <button
                        className="upload-btn"
                        onClick={uploadResume}
                    >
                        Upload Resume
                    </button>

                    <button
                        className="upload-btn"
                        onClick={viewResume}
                    >
                        View Resume
                    </button>

                    <button
                        className="upload-btn"
                        onClick={deleteResume}
                    >
                        Delete Resume
                    </button>

                </div>

            </div>

            <div className="resume-grid">

                <div className="resume-box">

                    <h3>
                        ATS Score
                    </h3>

                    <h1>
                        92%
                    </h1>

                    <p>
                        Excellent Resume Optimization
                    </p>

                </div>

                <div className="resume-box">

                    <h3>
                        Skills Found
                    </h3>

                    <ul>

                        <li>React.js</li>
                        <li>JavaScript</li>
                        <li>Node.js</li>
                        <li>MongoDB</li>
                        <li>UI/UX Design</li>

                    </ul>

                </div>

                <div className="resume-box">

                    <h3>
                        Missing Skills
                    </h3>

                    <ul>

                        <li>AWS</li>
                        <li>Docker</li>
                        <li>TypeScript</li>
                        <li>CI/CD</li>

                    </ul>

                </div>

            </div>

        </div>

    );

}

export default ResumeUpload;