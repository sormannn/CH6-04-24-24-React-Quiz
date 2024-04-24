import React, { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    // Clear interval when component unmounts or time is up
    return () => {
      clearInterval(timer);
      if (remainingTime <= 0) {
        onTimeout();
      }
    };
  }, [remainingTime, onTimeout]);

  return <progress id="question-time" value={remainingTime} max={timeout} />;
}
