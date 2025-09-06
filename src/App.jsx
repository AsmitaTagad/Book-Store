import { Link, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";

function App() {
  return (
    <div>
      <Navbar />

      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<h1>📚 Books Page</h1>} />
          <Route path="/login" element={<h1>🔑 Login Page</h1>} />
          <Route path="/register" element={<h1>📝 Register Page</h1>} />
          <Route path="/dashboard" element={<h1>📊 Dashboard</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
