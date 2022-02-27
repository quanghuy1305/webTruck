import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Homepage from "./components/homepage/Homepage"
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import "./app.scss"
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Homepage />
        <Portfolio/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
