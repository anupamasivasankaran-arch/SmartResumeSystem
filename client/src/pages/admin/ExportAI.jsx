function ExportAI() {

    const exportData = () => {

        const text =
            `
AI Export Report

Resume Matching : 94%
Skill Detection : 89%
Recommendation Accuracy : 91%
`;

        const blob = new Blob(
            [text],
            { type: "text/plain" }
        );

        const link =
            document.createElement("a");

        link.href =
            URL.createObjectURL(blob);

        link.download =
            "AI-Export.txt";

        link.click();
    };

    return (

        <div style={{
            background: "#0f172a",
            minHeight: "100vh",
            color: "white",
            padding: "40px"
        }}>

            <h1>Export AI Analytics</h1>

            <button
                onClick={exportData}
                style={{
                    padding: "15px 30px",
                    border: "none",
                    borderRadius: "10px",
                    background: "#4ade80",
                    color: "white",
                    cursor: "pointer"
                }}
            >
                Export Analytics
            </button>

        </div>
    );
}

export default ExportAI;