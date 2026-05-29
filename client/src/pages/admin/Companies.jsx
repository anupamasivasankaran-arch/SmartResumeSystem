import { useState } from "react";
import "./Companies.css";

function Companies() {

    const [companies, setCompanies] = useState([
        {
            id: 1,
            name: "Google",
            location: "Bangalore",
            jobs: 24,
            status: "Active",
        },

        {
            id: 2,
            name: "Microsoft",
            location: "Hyderabad",
            jobs: 18,
            status: "Active",
        },

        {
            id: 3,
            name: "Amazon",
            location: "Chennai",
            jobs: 10,
            status: "Inactive",
        },
    ]);

    const [showForm, setShowForm] = useState(false);

    const [newCompany, setNewCompany] = useState({
        name: "",
        location: "",
        jobs: "",
    });

    const handleChange = (e) => {

        setNewCompany({
            ...newCompany,
            [e.target.name]: e.target.value,
        });

    };

    const addCompany = (e) => {

        e.preventDefault();

        const company = {
            id: companies.length + 1,
            name: newCompany.name,
            location: newCompany.location,
            jobs: newCompany.jobs,
            status: "Active",
        };

        setCompanies([...companies, company]);

        setNewCompany({
            name: "",
            location: "",
            jobs: "",
        });

        setShowForm(false);

    };

    const toggleStatus = (id) => {

        const updated = companies.map((company) =>
            company.id === id
                ? {
                    ...company,
                    status:
                        company.status === "Active"
                            ? "Inactive"
                            : "Active",
                }
                : company
        );

        setCompanies(updated);

    };

    return (

        <div className="companies-page">

            {/* HEADER */}

            <div className="companies-header">

                <div>

                    <h1>Companies Management</h1>

                    <p>
                        Manage recruiters and companies
                    </p>

                </div>

                <button
                    className="add-btn"
                    onClick={() =>
                        setShowForm(!showForm)
                    }
                >
                    {showForm
                        ? "Close Form"
                        : "Add Company"}
                </button>

            </div>

            {/* STATS */}

            <div className="stats-grid">

                <div className="stats-card">
                    <h2>{companies.length}</h2>
                    <p>Total Companies</p>
                </div>

                <div className="stats-card">
                    <h2>
                        {
                            companies.filter(
                                (c) =>
                                    c.status === "Active"
                            ).length
                        }
                    </h2>
                    <p>Active Companies</p>
                </div>

                <div className="stats-card">
                    <h2>
                        {
                            companies.reduce(
                                (acc, c) =>
                                    acc + Number(c.jobs),
                                0
                            )
                        }
                    </h2>
                    <p>Total Open Jobs</p>
                </div>

                <div className="stats-card">
                    <h2>95%</h2>
                    <p>Hiring Success</p>
                </div>

            </div>

            {/* FORM */}

            {showForm && (

                <div className="form-card">

                    <h2>Add New Company</h2>

                    <form onSubmit={addCompany}>

                        <input
                            type="text"
                            name="name"
                            placeholder="Company Name"
                            value={newCompany.name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={newCompany.location}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="number"
                            name="jobs"
                            placeholder="Open Jobs"
                            value={newCompany.jobs}
                            onChange={handleChange}
                            required
                        />

                        <button
                            type="submit"
                            className="submit-btn"
                        >
                            Add Company
                        </button>

                    </form>

                </div>

            )}

            {/* TABLE */}

            <div className="table-card">

                <table>

                    <thead>

                        <tr>

                            <th>Company</th>
                            <th>Location</th>
                            <th>Open Jobs</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {companies.map((company) => (

                            <tr key={company.id}>

                                <td>{company.name}</td>

                                <td>{company.location}</td>

                                <td>{company.jobs}</td>

                                <td>

                                    <span
                                        className={
                                            company.status === "Active"
                                                ? "status active"
                                                : "status inactive"
                                        }
                                    >
                                        {company.status}
                                    </span>

                                </td>

                                <td>

                                    <button
                                        className="toggle-btn"
                                        onClick={() =>
                                            toggleStatus(company.id)
                                        }
                                    >
                                        {company.status === "Active"
                                            ? "Deactivate"
                                            : "Activate"}
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );
}

export default Companies;