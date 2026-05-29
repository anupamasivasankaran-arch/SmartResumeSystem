const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const jobRoutes =
    require("./routes/jobRoutes");

const applicationRoutes =
    require("./routes/applicationRoutes");

const resumeRoutes =
    require("./routes/resumeRoutes");

dotenv.config();

connectDB();

const app = express();

/* Middleware */

app.use(cors());

app.use(express.json());

app.use(
    "/uploads",
    express.static("uploads")
);

/* Auth Routes */

app.use(
    "/api/auth",
    require("./routes/authRoutes")
);

/* Job Routes */

app.use(
    "/api/jobs",
    jobRoutes
);

/* Application Routes */

app.use(
    "/api/applications",
    applicationRoutes
);

/* Resume Routes */

app.use(
    "/api/resumes",
    resumeRoutes
);

/* Home Route */

app.get("/", (req, res) => {

    res.send(
        "Smart Resume API Running..."
    );

});

/* Server */

const PORT =
    process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(
        `Server running on port ${PORT}`
    );

});