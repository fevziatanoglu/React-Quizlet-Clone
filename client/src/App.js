import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import {Routes, Route} from "react-router-dom";
import "./bootstrap.css";
import RegisterPage from "./pages/registerPage";
import Header from "./components/Header";
import ProfilePage from "./pages/profilePage";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>

    </div>
  );
}

export default App;
