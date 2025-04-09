import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Dark";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import Reg from "./pages/Reg";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/about" element={<About />}></Route>

          <Route path="/reg" element={<Reg />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
