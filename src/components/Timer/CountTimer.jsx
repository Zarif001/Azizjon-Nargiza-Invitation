import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("2024-11-09T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div>
      <div className="flex mt-10 w-[270px] p-2">
        <span className="text-sm font-vibes">{timeLeft.days || "00"} <br /> дн. </span>
        <span className="text-sm font-vibes">{timeLeft.hours || "00"} <br /> ч. </span>
        <span className="text-sm font-vibes">{timeLeft.minutes || "00"} <br /> мин. </span>
        <span className="text-sm font-vibes">{timeLeft.seconds || "00"} <br /> сек.</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
