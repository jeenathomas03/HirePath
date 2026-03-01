import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./user/pages/Index";
import Register from "./user/pages/Register";
import Login from "./user/pages/Login";
import RecruiterRegister from "./recruiter/pages/RecruiterRegister";
import RecruiterLogin from "./recruiter/pages/RecruiterLogin";
import Home from "./user/pages/Home";
import Profile from "./user/pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import ResumeBuilder from "./pages/ResumeBuilder";
import InterviewPrep from "./pages/InterviewPrep";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Pages */}
        <Route path="/" element={<Index />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />
        <Route path="/interview-prep" element={<InterviewPrep />} />

        {/* Recruiter Pages */}
        <Route path="/recruiter/register" element={<RecruiterRegister />} />
        <Route path="/recruiter/login" element={<RecruiterLogin />} />

        {/* Protected Pages */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;