function DownloadAnalytics() {

    const downloadFile = () => {

        const text =
            `
AI Analytics Report

Accuracy : 94%
AI Requests : 12.8K
Storage : 826GB
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
            "analytics-report.txt";

        link.click();
    };

    return (

        <div style={{
            background: "#0f172a",
            minHeight: "100vh",
            color: "white",
            padding: "40px"
        }}>

            <h1>Download Analytics</h1>

            <button
                onClick={downloadFile}
                style={{
                    padding: "15px 30px",
                    border: "none",
                    borderRadius: "10px",
                    background: "#38bdf8",
                    color: "white",
                    cursor: "pointer"
                }}
            >
                Download Report
            </button>

        </div>
    );
}

export default DownloadAnalytics;