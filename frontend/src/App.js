import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Register from "./pages/Register";
import Login from "./pages/Login";
import RecruiterRegister from "./pages/RecruiterRegister";
import RecruiterLogin from "./pages/RecruiterLogin";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Recruiterregister" element={<RecruiterRegister />} />
        <Route path="/Recruiterlogin" element={<RecruiterLogin />} />
        <Route path="/home"  element={<ProtectedRoute><Home /></ProtectedRoute> }/>
        <Route path="/profile"  element={<ProtectedRoute><Profile /></ProtectedRoute> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;