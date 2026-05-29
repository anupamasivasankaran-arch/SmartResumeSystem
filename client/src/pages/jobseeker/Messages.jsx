import "./Messages.css";
import { useState } from "react";

function Messages() {

    const [message, setMessage] = useState("");

    const [chatMessages, setChatMessages] = useState([
        {
            text: "Hello, your profile looks impressive.",
            type: "received",
        },

        {
            text: "Thank you. Looking forward to hearing more.",
            type: "sent",
        },

        {
            text: "We may schedule an interview soon.",
            type: "received",
        },
    ]);

    const sendMessage = () => {

        if (message.trim() === "") {

            return;

        }

        const newMessage = {
            text: message,
            type: "sent",
        };

        setChatMessages((prevMessages) => [
            ...prevMessages,
            newMessage,
        ]);

        setMessage("");

    };

    return (

        <div className="messages-page">

            {/* HEADER */}

            <div className="messages-header">

                <div>

                    <h1>Messages</h1>

                    <p>
                        Connect with recruiters and companies
                    </p>

                </div>

                <div className="new-msg">
                    3 New
                </div>

            </div>

            {/* MAIN CONTAINER */}

            <div className="messages-container">

                {/* CONTACTS */}

                <div className="contacts-panel">

                    <div className="contact-card active">

                        <div className="contact-avatar">
                            G
                            <span className="online-dot"></span>
                        </div>

                        <div>
                            <h3>Google Recruiter</h3>
                            <p>Interview Discussion</p>
                        </div>

                    </div>

                    <div className="contact-card">

                        <div className="contact-avatar">
                            M
                            <span className="online-dot"></span>
                        </div>

                        <div>
                            <h3>Microsoft HR</h3>
                            <p>Resume Shortlisted</p>
                        </div>

                    </div>

                    <div className="contact-card">

                        <div className="contact-avatar">
                            A
                            <span className="online-dot"></span>
                        </div>

                        <div>
                            <h3>Amazon Recruiter</h3>
                            <p>Application Update</p>
                        </div>

                    </div>

                </div>

                {/* CHAT PANEL */}

                <div className="chat-panel">

                    <div className="chat-top">

                        <h2>Google Recruiter</h2>

                        <p>Online now</p>

                    </div>

                    {/* CHAT BODY */}

                    <div className="chat-body">

                        {chatMessages.map((msg, index) => (

                            <div
                                key={index}
                                className={`message ${msg.type}`}
                            >

                                {msg.text}

                            </div>

                        ))}

                    </div>

                    {/* INPUT */}

                    <div className="chat-input">

                        <input
                            type="text"
                            placeholder="Type message..."
                            value={message}
                            onChange={(e) =>
                                setMessage(e.target.value)
                            }
                            onKeyDown={(e) => {

                                if (e.key === "Enter") {

                                    sendMessage();

                                }

                            }}
                        />

                        <button onClick={sendMessage}>

                            Send

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Messages;