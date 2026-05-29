import { createContext, useState } from "react";

export const ResumeContext = createContext();

function ResumeProvider({ children }) {

    const [resume, setResume] = useState(null);

    const [applications, setApplications] = useState([]);

    const [savedJobs, setSavedJobs] = useState([]);

    return (

        <ResumeContext.Provider
            value={{
                resume,
                setResume,
                applications,
                setApplications,
                savedJobs,
                setSavedJobs
            }}
        >

            {children}

        </ResumeContext.Provider>

    )

}

export default ResumeProvider;