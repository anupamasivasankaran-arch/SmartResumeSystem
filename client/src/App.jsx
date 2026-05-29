import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

/* LANDING */

import LandingPage from "./pages/landing/LandingPage";

/* AUTH */

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";

/* ADMIN */

import AdminDashboard from "./pages/admin/AdminDashboard";
import AIAnalytics from "./pages/admin/AIAnalytics";
import AIRecommendations from "./pages/admin/AIRecommendations";
import AnalyzeResume from "./pages/admin/AnalyzeResume";
import Applications from "./pages/admin/Applications";
import BlockUser from "./pages/admin/BlockUser";
import Companies from "./pages/admin/Companies";
import DownloadAnalytics from "./pages/admin/DownloadAnalytics";
import ExportAI from "./pages/admin/ExportAI";
import ExportUsers from "./pages/admin/ExportUsers";
import GenerateReport from "./pages/admin/GenerateReport";
import JobCategories from "./pages/admin/JobCategories";
import Jobs from "./pages/admin/Jobs";
import Notifications from "./pages/admin/Notifications";
import Reports from "./pages/admin/Reports";
import ReportsAnalytics from "./pages/admin/ReportsAnalytics";
import ResumeAnalysis from "./pages/admin/ResumeAnalysis";
import Settings from "./pages/admin/Settings";
import SupportTickets from "./pages/admin/SupportTickets";
import SystemDetails from "./pages/admin/SystemDetails";
import SystemUsage from "./pages/admin/SystemUsage";
import Users from "./pages/admin/Users";
import ActivityLogs from "./pages/admin/ActivityLogs";
import AddRecruiter from "./pages/admin/AddRecruiter";
import AddUser from "./pages/admin/AddUser";

/* JOB SEEKER */

import JobSeekerSidebar from "./pages/jobseeker/JobSeekerSidebar";

import JobSeekerDashboard from "./pages/jobseeker/JobSeekerDashboard";
import FindJobs from "./pages/jobseeker/FindJobs";
import ResumeUpload from "./pages/jobseeker/ResumeUpload";
import SavedJobs from "./pages/jobseeker/SavedJobs";
import TrackApplications from "./pages/jobseeker/TrackApplications";
import RecommendedJobs from "./pages/jobseeker/RecommendedJobs";
import AppliedJobs from "./pages/jobseeker/AppliedJobs";
import Messages from "./pages/jobseeker/Messages";
import SettingsJobseeker from "./pages/jobseeker/Settings";

import ApplicationDetails from "./pages/jobseeker/ApplicationDetails";
import WithdrawApplication from "./pages/jobseeker/WithdrawApplication";
import ResumeDetails from "./pages/jobseeker/ResumeDetails";
import GeneratedResume from "./pages/jobseeker/GeneratedResume";

import JobApply from "./pages/jobseeker/JobApply";

/* RECRUITER */

import RecruiterDashboard from "./pages/recruiter/RecruiterDashboard";
import PostJobs from "./pages/recruiter/PostJobs";
import Candidates from "./pages/recruiter/Candidates";
import ApplicationsRecruiter from "./pages/recruiter/Applications";
import Interviews from "./pages/recruiter/Interviews";
import Analytics from "./pages/recruiter/Analytics";
import CompanyProfile from "./pages/recruiter/CompanyProfile";


/* CSS */

import "./App.css";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* LANDING */}

        <Route
          path="/"
          element={<LandingPage />}
        />

        {/* AUTH */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        <Route
          path="/reset-password"
          element={<ResetPassword />}
        />

        {/* ADMIN */}

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin/ai-analytics"
          element={<AIAnalytics />}
        />

        <Route
          path="/admin/ai-recommendations"
          element={<AIRecommendations />}
        />

        <Route
          path="/admin/analyze-resume"
          element={<AnalyzeResume />}
        />

        <Route
          path="/admin/applications"
          element={<Applications />}
        />

        <Route
          path="/admin/block-user"
          element={<BlockUser />}
        />

        <Route
          path="/admin/companies"
          element={<Companies />}
        />

        <Route
          path="/admin/download-analytics"
          element={<DownloadAnalytics />}
        />

        <Route
          path="/admin/export-ai"
          element={<ExportAI />}
        />

        <Route
          path="/admin/export-users"
          element={<ExportUsers />}
        />

        <Route
          path="/admin/generate-report"
          element={<GenerateReport />}
        />

        <Route
          path="/admin/job-categories"
          element={<JobCategories />}
        />

        <Route
          path="/admin/jobs"
          element={<Jobs />}
        />

        <Route
          path="/admin/notifications"
          element={<Notifications />}
        />

        <Route
          path="/admin/reports"
          element={<Reports />}
        />

        <Route
          path="/admin/reports-analytics"
          element={<ReportsAnalytics />}
        />

        <Route
          path="/admin/resume-analysis"
          element={<ResumeAnalysis />}
        />

        <Route
          path="/admin/settings"
          element={<Settings />}
        />

        <Route
          path="/admin/support-tickets"
          element={<SupportTickets />}
        />

        <Route
          path="/admin/system-details"
          element={<SystemDetails />}
        />

        <Route
          path="/admin/system-usage"
          element={<SystemUsage />}
        />

        <Route
          path="/admin/users"
          element={<Users />}
        />

        <Route
          path="/admin/activity-logs"
          element={<ActivityLogs />}
        />

        <Route
          path="/admin/add-recruiter"
          element={<AddRecruiter />}
        />

        <Route
          path="/admin/add-user"
          element={<AddUser />}
        />

        {/* JOB SEEKER */}

        <Route
          path="/jobseeker"
          element={
            <div className="jobseeker-layout">

              <JobSeekerSidebar />

              <JobSeekerDashboard />

            </div>
          }
        />

        <Route
          path="/jobseeker/find-jobs"
          element={
            <div className="jobseeker-layout">

              <JobSeekerSidebar />

              <FindJobs />

            </div>
          }
        />

        <Route
          path="/jobseeker/recommended-jobs"
          element={
            <div className="jobseeker-layout">

              <JobSeekerSidebar />

              <RecommendedJobs />

            </div>
          }
        />

        <Route
          path="/jobseeker/applied-jobs"
          element={
            <div className="jobseeker-layout">

              <JobSeekerSidebar />

              <AppliedJobs />

            </div>
          }
        />

        <Route
          path="/jobseeker/resume-upload"
          element={
            <div className="jobseeker-layout">

              <JobSeekerSidebar />

              <ResumeUpload />

            </div>
          }
        />

        <Route
          path="/jobseeker/saved-jobs"
          element={
            <div className="jobseeker-layout">

              <JobSeekerSidebar />

              <SavedJobs />

            </div>
          }
        />

        <Route
          path="/jobseeker/track-applications"
          element={
            <div className="jobseeker-layout">

              <JobSeekerSidebar />

              <TrackApplications />

            </div>
          }
        />

        <Route
          path="/jobseeker/messages"
          element={
            <div className="jobseeker-layout">

              <JobSeekerSidebar />

              <Messages />

            </div>
          }
        />

        <Route
          path="/jobseeker/settings"
          element={
            <div className="jobseeker-layout">

              <JobSeekerSidebar />

              <SettingsJobseeker />

            </div>
          }
        />

        <Route
          path="/jobseeker/application-details"
          element={
            <div className="jobseeker-layout">

              <JobSeekerSidebar />

              <ApplicationDetails />

            </div>
          }
        />

        <Route
          path="/jobseeker/withdraw-application"
          element={
            <div className="jobseeker-layout">

              <JobSeekerSidebar />

              <WithdrawApplication />

            </div>
          }
        />

        <Route
          path="/jobseeker/resume-details"
          element={
            <div className="jobseeker-layout">

              <JobSeekerSidebar />

              <ResumeDetails />

            </div>
          }
        />

        <Route
          path="/jobseeker/generated-resume"
          element={
            <div className="jobseeker-layout">

              <JobSeekerSidebar />

              <GeneratedResume />

            </div>
          }
        />

        <Route
          path="/jobseeker/job-apply"
          element={
            <div className="jobseeker-layout">

              <JobSeekerSidebar />

              <JobApply />

            </div>
          }
        />
        {/* RECRUITER */}

        <Route
          path="/recruiter"
          element={<RecruiterDashboard />}
        />

        <Route
          path="/recruiter/dashboard"
          element={<RecruiterDashboard />}
        />

        <Route
          path="/recruiter/post-jobs"
          element={<PostJobs />}
        />

        <Route
          path="/recruiter/candidates"
          element={<Candidates />}
        />

        <Route
          path="/recruiter/applications"
          element={<ApplicationsRecruiter />}
        />

        <Route
          path="/recruiter/interviews"
          element={<Interviews />}
        />

        <Route
          path="/recruiter/analytics"
          element={<Analytics />}
        />

        <Route
          path="/recruiter/company-profile"
          element={<CompanyProfile />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;