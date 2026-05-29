import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] =
        useState("");
    const [showPassword, setShowPassword] =
        useState(false);

    const handleLogin = async (e) => {

        e.preventDefault();

        // ADMIN LOGIN

        if (
            email === "admin@gmail.com" &&
            password === "admin123"
        ) {

            alert(
                "Admin Login Successful"
            );

            navigate("/admin");

            return;
        }

        // LOCAL STORAGE USER LOGIN

        const savedUser =
            JSON.parse(
                localStorage.getItem(
                    "resumeAIUser"
                )
            );

        if (
            savedUser &&
            email === savedUser.email &&
            password === savedUser.password
        ) {

            alert(
                "Login Successful"
            );

            if (
                savedUser.role ===
                "Recruiter"
            ) {

                navigate(
                    "/recruiter"
                );

            } else {

                navigate(
                    "/jobseeker"
                );

            }

            return;
        }

        // MONGODB LOGIN

        try {

            const response =
                await axios.post(
                    "http://localhost:5000/api/auth/login",
                    {
                        email,
                        password
                    }
                );

            localStorage.setItem(
                "token",
                response.data.token
            );

            localStorage.setItem(
                "user",
                JSON.stringify(
                    response.data.user
                )
            );

            alert(
                "Login Successful"
            );

            if (
                response.data.user.role ===
                "recruiter"
            ) {

                navigate(
                    "/recruiter"
                );

            } else {

                navigate(
                    "/jobseeker"
                );

            }

        } catch (error) {

            alert(
                "Invalid Email or Password"
            );

            console.log(error);

        }

    };

    return (

        <div className="authPage">

            <button
                className="homeBtn"
                onClick={() =>
                    navigate("/")
                }
            >
                ⬅ Back Home
            </button>

            <div className="authCard">

                <h1>
                    Welcome Back
                </h1>

                <p>
                    Login to continue
                </p>

                <form
                    className="authForm"
                    onSubmit={handleLogin}
                >

                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) =>
                            setEmail(
                                e.target.value
                            )
                        }
                        required
                    />

                    <div className="passwordBox">

                        <input
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            placeholder="Password"
                            value={password}
                            onChange={(e) =>
                                setPassword(
                                    e.target.value
                                )
                            }
                            required
                        />

                        <span
                            className="togglePassword"
                            onClick={() =>
                                setShowPassword(
                                    !showPassword
                                )
                            }
                        >
                            {showPassword
                                ? "🙈 Hide"
                                : "👁 Show"}
                        </span>

                    </div>

                    <button
                        type="submit"
                    >
                        Login
                    </button>

                </form>

                <span
                    className="bottomText"
                >

                    Don’t have an account?

                    <Link
                        to="/register"
                    >
                        Register
                    </Link>

                </span>

            </div>

        </div>

    );

}

export default Login;