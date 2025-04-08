import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import Reg from "./pages/Reg"
import Enf from "./pages/Enf";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/reg" element={<Reg />}></Route>
          <Route path="*" element={<Enf/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
