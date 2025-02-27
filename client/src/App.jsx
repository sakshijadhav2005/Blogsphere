
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import CreatePost from "./Pages/CreatePost";
import PostDetail from "./Pages/PostDetail";
import Adminlogin from "./Pages/Adminlogin";


function App() {
  return (
  
    <Router>
      <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/Signup" element={<Signup />} />
     <Route path="/CreatePost" element={<CreatePost />} />
     <Route path="/postdetail" element={<PostDetail />} />
     <Route path="/admin" element={<Adminlogin />} />

      </Routes>
    </Router>
    
  );
}

export default App;
