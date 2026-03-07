import { BrowserRouter, Routes, Route } from "react-router-dom";
/* user pages */
import Index from "./user/pages/Index";
import Register from "./user/pages/Register";
import Login from "./user/pages/Login";
import Home from "./user/pages/Home";
import Profile from "./user/pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import ResumeBuilder from "./user/pages/ResumeBuilder";
import InterviewPrep from "./user/pages/InterviewPrep";

/* recruiter pages */
import RecruiterIndex from "./recruiter/pages/RecruiterIndex";
import RecruiterRegister from "./recruiter/pages/RecruiterRegister";
import RecruiterLogin from "./recruiter/pages/RecruiterLogin";
import RecruiterStatus from "./recruiter/pages/RecruiterStatus";
import RecruiterHome from "./recruiter/pages/RecruiterHome";
import PostJob from "./recruiter/pages/PostJob";

/* admin pages */
import AdminLogin from "./admin/pages/AdminLogin";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminApprove from "./admin/pages/AdminApprove";



function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Pages */}
        <Route path="/" element={<Index />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />
        <Route path="/interview-prep" element={<InterviewPrep />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}/>

        {/* Recruiter Pages */ }
        
        <Route path="/recruiter" element={<RecruiterIndex />} />
        <Route path="/recruiter/register" element={<RecruiterRegister />} />
        <Route path="/recruiter/login" element={<RecruiterLogin />} />
        <Route path="/recruiter/status" element={<RecruiterStatus />} />
        <Route path="/recruiter-home" element={<RecruiterHome />} />
        <Route path="/recruiter/post-job" element={<PostJob />} />
        

        {/* admin pages */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin-approve" element={<AdminApprove />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;