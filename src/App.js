import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Paint from "./components/painter/Paint";
import { AuthProvider } from "./components/Context/AuthContext";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/paint" element={<Paint />} />
            <Route path="/members/signup" element={<Signup />} />
          </Routes>
        </div>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
