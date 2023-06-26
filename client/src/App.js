import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import {Routes, Route} from "react-router-dom";
import "./bootstrap.css";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

    </div>
  );
}

export default App;
