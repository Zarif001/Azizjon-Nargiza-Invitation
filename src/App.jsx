import React from "react";
import SimpleSlider from "./components/Slider/Slider";
import Timer from "./components/Timer/Timer";
import About from "./components/About/About";
import BackgroundMusic from "./components/BackgroundMusic/BackgroundMusic"; 
import Location from "./components/Location/Location";
import Form from "./components/Form/Form";
import WeddingOrganizer from "./components/Organizator/Organizator";

function App() {
  return (
    <div className="h-screen max-w-4xl relative">
      <BackgroundMusic /> 
      <SimpleSlider />
      <Timer />
      <About />
      <Location/>
      <Form/>
      <WeddingOrganizer/>
    </div>
  );
}

export default App;
