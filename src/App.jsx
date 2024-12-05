import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CoreContent from "./components/CoreContent/CoreContent";
import AboutContent from "./components/AboutContent/AboutContent";
import WorkCards from "./components/WorkCards/WorkCards";

function App() {
  return (
    <>
      <Analytics />
      <Navbar />
      <CoreContent />
      <AboutContent />
      <WorkCards />
    </>
  );
}

export default App;
