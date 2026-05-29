function ResetPassword() {

    return (

        <div
            style={{
                minHeight: "100vh",
                background: "#0f172a",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white"
            }}
        >

            <div
                style={{
                    background: "#1e293b",
                    padding: "40px",
                    borderRadius: "20px",
                    width: "400px"
                }}
            >

                <h1
                    style={{
                        fontSize: "35px",
                        marginBottom: "20px",
                        textAlign: "center"
                    }}
                >
                    Reset Password
                </h1>

                <input
                    type="password"
                    placeholder="New Password"
                    style={{
                        width: "100%",
                        padding: "15px",
                        borderRadius: "10px",
                        border: "none",
                        marginBottom: "20px"
                    }}
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    style={{
                        width: "100%",
                        padding: "15px",
                        borderRadius: "10px",
                        border: "none",
                        marginBottom: "20px"
                    }}
                />

                <button
                    style={{
                        width: "100%",
                        padding: "15px",
                        border: "none",
                        borderRadius: "10px",
                        background: "#38bdf8",
                        fontWeight: "bold",
                        cursor: "pointer"
                    }}
                >
                    Reset Password
                </button>

            </div>

        </div>

    );

}

export default ResetPassword;