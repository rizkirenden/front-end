import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./landingpage/index";
import LoginPage from "./login/index";
import RegisterPage from "./register/index";

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
