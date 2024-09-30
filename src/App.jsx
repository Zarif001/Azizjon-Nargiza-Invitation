import React from "react";
import SimpleSlider from "./components/Slider/Slider";
import Timer from "./components/Timer/Timer";
import About from "./components/About/About";
import BackgroundMusic from "./components/BackgroundMusic/BackgroundMusic"; 

function App() {
  return (
    <div className="h-screen max-w-4xl relative">
      <BackgroundMusic /> 
      <SimpleSlider />
      <Timer />
      <About />
    </div>
  );
}

export default App;
