import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./landingpage/index"; // Import directly from /landingpage/Index.js
import LoginPage from "./login/index"; // Import directly from /login/Index.js
import RegisterPage from "./register/index"; // Import directly from /register/Index.js

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
