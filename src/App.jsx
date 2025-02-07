import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CoreContent from "./components/CoreContent/CoreContent";
import AboutContent from "./components/AboutContent/AboutContent";
import WorkCards from "./components/WorkCards/WorkCards";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <>
      <Analytics />
      {/* <Navbar /> */}
      <CoreContent />
      <AboutContent />
      <WorkCards />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
