import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
<<<<<<< HEAD
=======
import reactLogo from "./assets/react.svg";
>>>>>>> 3246522 (About me in process, save before restyle)
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CoreContent from "./components/CoreContent/CoreContent";
import AboutContent from "./components/AboutContent/AboutContent";

function App() {
  return (
    <>
      <Analytics />
      <Navbar />
      <CoreContent />
      <AboutContent />
    </>
  );
}

export default App;
