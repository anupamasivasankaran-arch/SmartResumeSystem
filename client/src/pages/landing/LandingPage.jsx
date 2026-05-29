import React from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {

    const navigate = useNavigate();

    return (

        <div className="landing">

            {/* NAVBAR */}

            <nav className="navbar">

                <h1 className="logo">
                    ResumeAI
                </h1>

                <ul className="navLinks">

                    <li>
                        <a href="#features">
                            Features
                        </a>
                    </li>

                    <li>
                        <a href="#howworks">
                            How It Works
                        </a>
                    </li>

                    <li>
                        <a href="#companies">
                            Companies
                        </a>
                    </li>

                    <li>
                        <a href="#testimonials">
                            Testimonials
                        </a>
                    </li>

                </ul>

                <div className="navBtns">

                    <button
                        className="loginBtn"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>

                    <button
                        className="registerBtn"
                        onClick={() => navigate("/register")}
                    >
                        Register
                    </button>

                </div>

            </nav>



            {/* HERO SECTION */}

            <section className="hero">

                <div className="heroLeft">

                    <h1>
                        Smart Resume Analyzer
                        <br />
                        & Job Recommendation System
                    </h1>

                    <p>
                        Analyze resumes using AI, discover jobs and connect with recruiters.
                    </p>

                    <button
                        className="startBtn"
                        onClick={() => navigate("/register")}
                    >
                        Get Started
                    </button>

                </div>

                <div className="heroRight">

                    <div className="heroCard">
                        🤖 AI Analysis
                    </div>

                    <div className="heroCard">
                        📄 Resume Score : 92%
                    </div>

                    <div className="heroCard">
                        💼 Jobs Matched : 35
                    </div>

                </div>

            </section>



            {/* STATS */}

            <section className="stats">

                <div className="statCard">
                    <h2>10K+</h2>
                    <p>Users</p>
                </div>

                <div className="statCard">
                    <h2>500+</h2>
                    <p>Companies</p>
                </div>

                <div className="statCard">
                    <h2>20K+</h2>
                    <p>Resumes</p>
                </div>

                <div className="statCard">
                    <h2>8K+</h2>
                    <p>Jobs</p>
                </div>

            </section>



            {/* FEATURES */}

            <section id="features">

                <h1 className="sectionTitle">
                    Features
                </h1>

                <div className="featureGrid">

                    <div className="featureCard">
                        <h2>📄 Resume Analysis</h2>
                        <p>
                            AI checks resume quality and suggests improvements.
                        </p>
                    </div>

                    <div className="featureCard">
                        <h2>💼 Job Matching</h2>
                        <p>
                            Find suitable jobs instantly.
                        </p>
                    </div>

                    <div className="featureCard">
                        <h2>📊 Analytics</h2>
                        <p>
                            Track profile growth.
                        </p>
                    </div>

                </div>

            </section>



            {/* HOW IT WORKS */}

            <section id="howworks">

                <h1 className="sectionTitle">
                    How It Works
                </h1>

                <div className="featureGrid">

                    <div className="featureCard">
                        <h2>📤 Upload Resume</h2>
                        <p>Upload resume securely</p>
                    </div>

                    <div className="featureCard">
                        <h2>🤖 AI Analysis</h2>
                        <p>AI evaluates skills</p>
                    </div>

                    <div className="featureCard">
                        <h2>🎯 Recommendations</h2>
                        <p>Get matched jobs</p>
                    </div>

                </div>

            </section>



            {/* COMPANIES */}

            <section id="companies">

                <h1 className="sectionTitle">
                    Trusted Companies
                </h1>

                <div className="companies">

                    <div>Google</div>
                    <div>Microsoft</div>
                    <div>Amazon</div>
                    <div>Infosys</div>
                    <div>TCS</div>

                </div>

            </section>



            {/* TESTIMONIALS */}

            <section id="testimonials">

                <h1 className="sectionTitle">
                    Testimonials
                </h1>

                <div className="featureGrid">

                    <div className="featureCard">
                        <h2>⭐⭐⭐⭐⭐</h2>
                        <p>Got hired within 2 weeks!</p>
                    </div>

                    <div className="featureCard">
                        <h2>⭐⭐⭐⭐⭐</h2>
                        <p>AI suggestions helped a lot.</p>
                    </div>

                    <div className="featureCard">
                        <h2>⭐⭐⭐⭐⭐</h2>
                        <p>Very useful platform.</p>
                    </div>

                </div>

            </section>



            {/* CTA */}

            <section className="cta">

                <h1>
                    Start Your Career Journey Today
                </h1>

                <button
                    className="startBtn"
                    onClick={() => navigate("/register")}
                >
                    Get Started
                </button>

            </section>



            {/* FOOTER */}

            <footer className="footer">

                © 2026 ResumeAI | All Rights Reserved

            </footer>

        </div>

    );

}

export default LandingPage;