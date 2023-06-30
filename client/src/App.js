import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import {Routes, Route} from "react-router-dom";
import RegisterPage from "./pages/registerPage";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ProfilePage from "./pages/profilePage";
import FolderPage from "./pages/folderPage";

function App() {
  return (
    <div className="App h-full w-full">
      <Header/>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/folder/:folderId" element={<FolderPage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>

    </div>
  );
}

export default App;
