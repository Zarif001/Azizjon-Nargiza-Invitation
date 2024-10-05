import React, { useState } from "react";
import backgroundMusic from '../../assets/audio/music.mp3';

export default function BackgroundMusic() {
  const [audio] = useState(new Audio(backgroundMusic));
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => {
        console.error("Ошибка воспроизведения:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button 
      onClick={toggleMusic} 
      className="fixed top-4 right-4 bg-orange-400 hover:bg-orange-500 text-white p-2 rounded z-10"
    >
      {isPlaying ? "Отключить музыку" : "Включить музыку"}
    </button>
  );
}
