import { useState } from "react";
import "../../App.css";

function AddRecruiter() {

    // SHOW / HIDE PASSWORD

    const [showPassword, setShowPassword] = useState(false);

    // FORM DATA

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        password: "",
    });

    // HANDLE INPUT CHANGE

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    // GENERATE PASSWORD

    const generatePassword = () => {

        const chars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        let password = "";

        for (let i = 0; i < 10; i++) {

            password += chars.charAt(
                Math.floor(Math.random() * chars.length)
            );

        }

        setFormData({
            ...formData,
            password,
        });

    };

    // HANDLE SUBMIT

    const handleSubmit = (e) => {

        e.preventDefault();

        // VALIDATION

        if (
            !formData.name ||
            !formData.email ||
            !formData.company ||
            !formData.password
        ) {

            alert("Please fill all fields");

            return;
        }

        alert("Recruiter Added Successfully ✅");

        // RESET FORM

        setFormData({
            name: "",
            email: "",
            company: "",
            password: "",
        });

    };

    return (

        <div className="add-recruiter-page">

            <div className="add-recruiter-card">

                <h1>Add Recruiter</h1>

                <p className="sub-text">
                    Create recruiter account for company hiring
                </p>

                <form onSubmit={handleSubmit}>

                    {/* RECRUITER NAME */}

                    <div className="form-group">

                        <label>Recruiter Name</label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter recruiter name"
                            value={formData.name}
                            onChange={handleChange}
                        />

                    </div>

                    {/* EMAIL */}

                    <div className="form-group">

                        <label>Email Address</label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter recruiter email"
                            value={formData.email}
                            onChange={handleChange}
                        />

                    </div>

                    {/* COMPANY */}

                    <div className="form-group">

                        <label>Company Name</label>

                        <input
                            type="text"
                            name="company"
                            placeholder="Enter company name"
                            value={formData.company}
                            onChange={handleChange}
                        />

                    </div>

                    {/* PASSWORD */}

                    <div className="form-group">

                        <label>Temporary Password</label>

                        <div className="password-box">

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Generate password"
                                value={formData.password}
                                onChange={handleChange}
                            />

                            <button
                                type="button"
                                className="eye-btn"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                            >
                                {showPassword ? "🙈" : "👁"}
                            </button>

                        </div>

                    </div>

                    {/* GENERATE BUTTON */}

                    <button
                        type="button"
                        className="generate-btn"
                        onClick={generatePassword}
                    >
                        Generate Password
                    </button>

                    {/* SUBMIT BUTTON */}

                    <button
                        type="submit"
                        className="submit-btn"
                    >
                        Add Recruiter
                    </button>

                </form>

            </div>

        </div>

    );
}

export default AddRecruiter;