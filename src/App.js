import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
