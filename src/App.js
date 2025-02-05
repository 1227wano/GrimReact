import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";

import "./App.css";
import Paint from "./components/painter/Paint";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Paint />
      </div>
      <Footer />
    </div>
  );
}

export default App;
