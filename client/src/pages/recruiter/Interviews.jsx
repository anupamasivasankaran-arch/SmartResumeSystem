import "./Interviews.css";
import { useEffect, useState } from "react";

function Interviews() {

    const candidates = [

        {
            id: 1,
            name: "Anupama",
            role: "Frontend Developer",
            date: "28 May 2026",
            time: "10:30 AM",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },

        {
            id: 2,
            name: "Rahul",
            role: "UI/UX Designer",
            date: "29 May 2026",
            time: "2:00 PM",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },

        {
            id: 3,
            name: "Arjun",
            role: "Backend Developer",
            date: "30 May 2026",
            time: "11:00 AM",
            image: "https://randomuser.me/api/portraits/men/45.jpg"
        },

        {
            id: 4,
            name: "Sneha",
            role: "Data Analyst",
            date: "31 May 2026",
            time: "4:00 PM",
            image: "https://randomuser.me/api/portraits/women/65.jpg"
        }

    ];

    const [scheduled, setScheduled] = useState([]);

    useEffect(() => {

        const savedInterviews =
            JSON.parse(
                localStorage.getItem(
                    "scheduledInterviews"
                )
            ) || [];

        setScheduled(savedInterviews);

    }, []);

    const scheduleInterview = (candidate) => {

        const interviews =
            JSON.parse(
                localStorage.getItem(
                    "scheduledInterviews"
                )
            ) || [];

        const exists =
            interviews.find(
                (item) =>
                    item.id === candidate.id
            );

        if (exists) {

            alert(
                `${candidate.name} already scheduled`
            );

            return;
        }

        const updated = [
            ...interviews,
            {
                ...candidate,
                status: "Scheduled"
            }
        ];

        localStorage.setItem(
            "scheduledInterviews",
            JSON.stringify(updated)
        );

        setScheduled(updated);

        alert(
            `Interview scheduled for ${candidate.name}`
        );

    };

    const rescheduleInterview = (candidate) => {

        const newDate =
            prompt("Enter new date");

        const newTime =
            prompt("Enter new time");

        if (!newDate || !newTime) return;

        const interviews =
            JSON.parse(
                localStorage.getItem(
                    "scheduledInterviews"
                )
            ) || [];

        const updated =
            interviews.map((item) =>
                item.id === candidate.id
                    ? {
                        ...item,
                        date: newDate,
                        time: newTime
                    }
                    : item
            );

        localStorage.setItem(
            "scheduledInterviews",
            JSON.stringify(updated)
        );

        setScheduled(updated);

        alert(
            `${candidate.name} rescheduled`
        );

    };

    const completeInterview = (candidate) => {

        alert(
            `${candidate.name} interview completed`
        );

    };

    const cancelInterview = (candidate) => {

        const interviews =
            JSON.parse(
                localStorage.getItem(
                    "scheduledInterviews"
                )
            ) || [];

        const updated =
            interviews.filter(
                (item) =>
                    item.id !== candidate.id
            );

        localStorage.setItem(
            "scheduledInterviews",
            JSON.stringify(updated)
        );

        setScheduled(updated);

        alert(
            `${candidate.name} interview cancelled`
        );

    };

    return (

        <div className="interviews-page">

            <div className="interviews-header">

                <h1>Interviews</h1>

                <p>
                    Schedule and manage interviews
                </p>

            </div>

            <div className="interview-stats">

                <div className="stat-box">
                    <h1>{candidates.length}</h1>
                    <p>Total Candidates</p>
                </div>

                <div className="stat-box">
                    <h1>{scheduled.length}</h1>
                    <p>Scheduled</p>
                </div>

                <div className="stat-box">
                    <h1>24</h1>
                    <p>Completed</p>
                </div>

            </div>

            <div className="interview-grid">

                {candidates.map((candidate) => {

                    const isScheduled =
                        scheduled.find(
                            (item) =>
                                item.id === candidate.id
                        );

                    return (

                        <div
                            className="interview-card"
                            key={candidate.id}
                        >

                            <div className="candidate-top">

                                <img
                                    src={candidate.image}
                                    alt=""
                                />

                                <div>

                                    <h2>
                                        {candidate.name}
                                    </h2>

                                    <p>
                                        {candidate.role}
                                    </p>

                                </div>

                                <span
                                    className={
                                        isScheduled
                                            ? "scheduled-badge"
                                            : "pending-badge"
                                    }
                                >
                                    {
                                        isScheduled
                                            ? "Scheduled"
                                            : "Pending"
                                    }
                                </span>

                            </div>

                            <div className="date-time-box">

                                <div>

                                    <h4>Date</h4>

                                    <h3>
                                        {
                                            isScheduled
                                                ? isScheduled.date
                                                : candidate.date
                                        }
                                    </h3>

                                </div>

                                <div>

                                    <h4>Time</h4>

                                    <h3>
                                        {
                                            isScheduled
                                                ? isScheduled.time
                                                : candidate.time
                                        }
                                    </h3>

                                </div>

                            </div>

                            <div className="interview-buttons">

                                <button
                                    className="schedule-btn"
                                    onClick={() =>
                                        scheduleInterview(candidate)
                                    }
                                >
                                    Schedule
                                </button>

                                <button
                                    className="reschedule-btn"
                                    onClick={() =>
                                        rescheduleInterview(candidate)
                                    }
                                >
                                    Reschedule
                                </button>

                                <button
                                    className="complete-btn"
                                    onClick={() =>
                                        completeInterview(candidate)
                                    }
                                >
                                    Complete
                                </button>

                                <button
                                    className="cancel-btn"
                                    onClick={() =>
                                        cancelInterview(candidate)
                                    }
                                >
                                    Cancel
                                </button>

                            </div>

                        </div>

                    );

                })}

            </div>

            <div className="scheduled-section">

                <h1>
                    Scheduled Interviews
                </h1>

                <div className="scheduled-grid">

                    {scheduled.map((item) => (

                        <div
                            className="scheduled-card"
                            key={item.id}
                        >

                            <div className="candidate-top">

                                <img
                                    src={item.image}
                                    alt=""
                                />

                                <div>

                                    <h2>{item.name}</h2>

                                    <p>{item.role}</p>

                                </div>

                                <span className="scheduled-badge">
                                    Scheduled
                                </span>

                            </div>

                            <div className="date-time-box">

                                <div>

                                    <h4>Date</h4>

                                    <h3>{item.date}</h3>

                                </div>

                                <div>

                                    <h4>Time</h4>

                                    <h3>{item.time}</h3>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>

    );

}

export default Interviews;