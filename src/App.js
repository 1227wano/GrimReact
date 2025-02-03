import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content"> </div>
      <Footer />
    </div>
  );
}

export default App;
