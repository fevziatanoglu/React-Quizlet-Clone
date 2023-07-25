import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/registerPage";
import Modal from "./components/Modal";
import ProfilePage from "./pages/profilePage";
import FolderPage from "./pages/folderPage";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App h-full w-full">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/folder/:folderId" element={<FolderPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>

    </div>
  );
}

export default App;
