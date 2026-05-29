import "./CompanyProfile.css";
import { useState } from "react";

function CompanyProfile() {

    const defaultCompanies = [

        {
            id: 1,
            name: "HireAI Technologies",
            location: "Bangalore, India",
            email: "hr@hireai.com",
            website: "www.hireai.com",
            employees: "250+",
            industry: "Software & AI",
            recruiters: 12,
            activeJobs: 28,
            description:
                "Leading AI-powered hiring platform helping companies recruit top talent.",
            image:
                "https://randomuser.me/api/portraits/men/32.jpg"
        },

        {
            id: 2,
            name: "NovaSoft Solutions",
            location: "Hyderabad, India",
            email: "careers@novasoft.com",
            website: "www.novasoft.com",
            employees: "180+",
            industry: "Cloud Computing",
            recruiters: 8,
            activeJobs: 15,
            description:
                "Cloud infrastructure and enterprise software company.",
            image:
                "https://randomuser.me/api/portraits/women/44.jpg"
        }

    ];

    const [companies, setCompanies] = useState(() => {

        const saved =
            localStorage.getItem(
                "companyProfiles"
            );

        return saved
            ? JSON.parse(saved)
            : defaultCompanies;

    });

    const [editingId, setEditingId] =
        useState(null);

    const handleEdit = (id) => {

        setEditingId(id);

    };

    const handleChange = (
        id,
        field,
        value
    ) => {

        setCompanies(

            companies.map((company) =>

                company.id === id

                    ? {
                        ...company,
                        [field]: value
                    }

                    : company

            )

        );

    };

    const saveProfile = () => {

        localStorage.setItem(
            "companyProfiles",
            JSON.stringify(companies)
        );

        alert(
            "Company profile updated successfully"
        );

        setEditingId(null);

    };

    return (

        <div className="company-page">

            <div className="company-header">

                <h1>Company Profile</h1>

                <p>
                    Manage company information,
                    recruiters and active jobs
                </p>

            </div>

            <div className="company-grid">

                {companies.map((company) => (

                    <div
                        className="company-card"
                        key={company.id}
                    >

                        <div className="company-top">

                            <img
                                src={company.image}
                                alt=""
                            />

                            <div>

                                {

                                    editingId === company.id

                                        ? (

                                            <input
                                                className="edit-input title-input"
                                                value={company.name}
                                                onChange={(e) =>

                                                    handleChange(
                                                        company.id,
                                                        "name",
                                                        e.target.value
                                                    )

                                                }
                                            />

                                        )

                                        : (

                                            <h2>
                                                {company.name}
                                            </h2>

                                        )

                                }

                                {

                                    editingId === company.id

                                        ? (

                                            <input
                                                className="edit-input"
                                                value={company.location}
                                                onChange={(e) =>

                                                    handleChange(
                                                        company.id,
                                                        "location",
                                                        e.target.value
                                                    )

                                                }
                                            />

                                        )

                                        : (

                                            <p>
                                                {company.location}
                                            </p>

                                        )

                                }

                            </div>

                        </div>

                        <div className="company-info-grid">

                            <div className="info-box">

                                <h4>Email</h4>

                                <p>{company.email}</p>

                            </div>

                            <div className="info-box">

                                <h4>Website</h4>

                                <p>{company.website}</p>

                            </div>

                            <div className="info-box">

                                <h4>Employees</h4>

                                <p>{company.employees}</p>

                            </div>

                            <div className="info-box">

                                <h4>Industry</h4>

                                <p>{company.industry}</p>

                            </div>

                        </div>

                        <div className="company-stats">

                            <div className="stat-item">

                                <h4>Recruiters</h4>

                                <p>
                                    {company.recruiters}
                                </p>

                            </div>

                            <div className="stat-item">

                                <h4>Active Jobs</h4>

                                <p>
                                    {company.activeJobs}
                                </p>

                            </div>

                        </div>

                        <div className="company-description">

                            <h4>
                                Company Description
                            </h4>

                            {

                                editingId === company.id

                                    ? (

                                        <textarea
                                            className="edit-textarea"
                                            value={
                                                company.description
                                            }
                                            onChange={(e) =>

                                                handleChange(
                                                    company.id,
                                                    "description",
                                                    e.target.value
                                                )

                                            }
                                        />

                                    )

                                    : (

                                        <p>
                                            {company.description}
                                        </p>

                                    )

                            }

                        </div>

                        <div className="company-buttons">

                            {

                                editingId === company.id

                                    ? (

                                        <button
                                            className="save-btn"
                                            onClick={
                                                saveProfile
                                            }
                                        >
                                            Save Changes
                                        </button>

                                    )

                                    : (

                                        <button
                                            className="edit-btn"
                                            onClick={() =>
                                                handleEdit(
                                                    company.id
                                                )
                                            }
                                        >
                                            Edit Profile
                                        </button>

                                    )

                            }

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default CompanyProfile;