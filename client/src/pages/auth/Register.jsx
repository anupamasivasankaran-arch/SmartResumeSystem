import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import "./Login.css";

function Register() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] =
        useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: ""
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleRegister = (e) => {

        e.preventDefault();

        localStorage.setItem(
            "resumeAIUser",
            JSON.stringify(formData)
        );

        alert("Account Created Successfully");

        navigate("/login");

    };

    return (

        <div className="authPage">

            {/* Back Home Button */}
            <button
                className="homeBtn"
                onClick={() => navigate("/")}
            >
                ⬅ Back Home
            </button>

            <div className="authCard">

                <h1>Create Account</h1>

                <p>Register to continue</p>

                <form
                    className="authForm"
                    onSubmit={handleRegister}
                >

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <div className="passwordBox">

                        <input
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />

                        <span
                            className="togglePassword"
                            onClick={() =>
                                setShowPassword(!showPassword)
                            }
                        >
                            {showPassword ? "🙈 Hide" : "👁 Show"}
                        </span>

                    </div>

                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                    >

                        <option value="">
                            Select Role
                        </option>

                        <option value="Recruiter">
                            Recruiter
                        </option>

                        <option value="Jobseeker">
                            Jobseeker
                        </option>

                    </select>

                    <button type="submit">
                        Register
                    </button>

                </form>

                <span className="bottomText">

                    Already have an account?

                    <Link to="/login">
                        Login
                    </Link>

                </span>

            </div>

        </div>

    );

}

export default Register;