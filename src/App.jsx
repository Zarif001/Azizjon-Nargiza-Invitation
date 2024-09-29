import React, { useEffect, useState } from "react";
import SimpleSlider from "./components/Slider/Slider";
import Timer from "./components/Timer/Timer";
import backgroundMusic from './assets/audio/music.mp3';

function App() {
  const [audio] = useState(new Audio(backgroundMusic));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const playMusic = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Ошибка воспроизведения:", error);
      }
    };

    playMusic();

    // Убираем обработчик при размонтировании
    return () => {
      audio.pause();
    };
  }, [audio]);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="h-screen max-w-4xl">
      <button onClick={toggleMusic} className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded">
        {isPlaying ? "Отключить музыку" : "Включить музыку"}
      </button>
      <SimpleSlider />
      <Timer />
    </div>
  );
}

export default App;
