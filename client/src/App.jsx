
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import CreatePost from "./Pages/CreatePost";
import Home from "./Pages/Home";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import ViewPost from "./Pages/Viewpost";

function App() {
  return (
  
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
     <Route path="/Login" element={<Login />} />
     <Route path="/Signup" element={<Signup />} />
      <Route path="/ViewPost" element={<ViewPost/>} />
      <Route path="/CreatePost" element={<CreatePost />} />
     <Route path="/forgot-password" element={<ForgotPassword />} />
     <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </Router>
    
  );
}

export default App;
