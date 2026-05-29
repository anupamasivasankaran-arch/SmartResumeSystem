import { useState } from "react";
import "./AddUser.css";

function AddUser() {

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
        password: "",
    });

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

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (
            !formData.name ||
            !formData.email ||
            !formData.role ||
            !formData.password
        ) {

            alert("Please fill all fields");
            return;
        }

        alert("User Created Successfully ✅");

        setFormData({
            name: "",
            email: "",
            role: "",
            password: "",
        });

    };

    return (

        <div className="adduser-page">

            <div className="adduser-card">

                <div className="adduser-header">

                    <h1>Add New User</h1>

                    <p>
                        Create platform users and manage access roles
                    </p>

                </div>

                <form onSubmit={handleSubmit}>

                    {/* FULL NAME */}

                    <div className="form-group">

                        <label>Full Name</label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter full name"
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
                            placeholder="Enter email address"
                            value={formData.email}
                            onChange={handleChange}
                        />

                    </div>

                    {/* ROLE */}

                    <div className="form-group">

                        <label>User Role</label>

                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                        >

                            <option value="">
                                Select Role
                            </option>

                            <option value="Admin">
                                Admin
                            </option>

                            <option value="Recruiter">
                                Recruiter
                            </option>

                            <option value="Job Seeker">
                                Job Seeker
                            </option>

                        </select>

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
                                👁
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
                        Create User
                    </button>

                </form>

            </div>

        </div>

    );
}

export default AddUser;