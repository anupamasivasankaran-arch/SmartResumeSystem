import "./GeneratedResume.css";

function GeneratedResume() {

    const downloadResume = () => {

        const resumeContent = `
ANUPAMA N

Frontend Developer
anupama@gmail.com

-----------------------------------

PROFESSIONAL SUMMARY

Passionate frontend developer with strong
knowledge in React.js, JavaScript,
responsive UI design and modern web
technologies.

-----------------------------------

SKILLS

• React.js
• JavaScript
• HTML
• CSS
• Node.js
• MongoDB

-----------------------------------

PROJECTS

Smart Resume Analyzer

AI powered job recommendation and
resume analysis platform.

-----------------------------------
`;

        const blob = new Blob(
            [resumeContent],
            {
                type: "text/plain",
            }
        );

        const link =
            document.createElement("a");

        link.href =
            URL.createObjectURL(blob);

        link.download =
            "Anupama_Resume.txt";

        link.click();

    };

    return (

        <div className="generated-resume-page">

            <div className="generated-header">

                <div>

                    <h1>AI Generated Resume</h1>

                    <p>
                        Professional ATS optimized resume
                    </p>

                </div>

                <button
                    className="download-generated-btn"
                    onClick={downloadResume}
                >

                    Download Resume

                </button>

            </div>

            <div className="generated-resume-card">

                <div className="generated-top">

                    <div className="generated-profile">

                        <div className="generated-avatar">

                            A

                        </div>

                        <div>

                            <h2>Anupama N</h2>

                            <h3>
                                Frontend Developer
                            </h3>

                            <p>
                                anupama@gmail.com
                            </p>

                        </div>

                    </div>

                </div>

                <div className="generated-section">

                    <h3>
                        Professional Summary
                    </h3>

                    <p>

                        Passionate frontend developer
                        with strong knowledge in
                        React.js, JavaScript,
                        responsive UI design and
                        modern web technologies.

                    </p>

                </div>

                <div className="generated-section">

                    <h3>Skills</h3>

                    <div className="generated-skills">

                        <span>React.js</span>

                        <span>JavaScript</span>

                        <span>HTML</span>

                        <span>CSS</span>

                        <span>Node.js</span>

                        <span>MongoDB</span>

                    </div>

                </div>

                <div className="generated-section">

                    <h3>Projects</h3>

                    <div className="project-box">

                        <h4>
                            Smart Resume Analyzer
                        </h4>

                        <p>

                            AI powered job recommendation
                            and resume analysis platform.

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default GeneratedResume;