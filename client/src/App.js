import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/api/users/login" element={<LoginPage />} />
        <Route exact path="/api/users/register" element={<RegisterPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
