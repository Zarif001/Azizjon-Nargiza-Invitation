import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("2025-05-24T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex mt-10 w-[270px] p-2">
      <span className="text-m font-vibes">{timeLeft.days} <br /> дн. </span>
      <span className="text-m font-vibes">{timeLeft.hours} <br /> ч. </span>
      <span className="text-m font-vibes">{timeLeft.minutes} <br /> мин. </span>
      <span className="text-m font-vibes">{timeLeft.seconds} <br /> сек.</span>
    </div>
  );
};

export default CountdownTimer;
