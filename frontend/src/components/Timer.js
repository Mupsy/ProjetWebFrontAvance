import React from "react";

function Timer({ timeLeft, total }) {
  const percentage = (timeLeft / total) * 100;
  const isWarning = timeLeft <= 10;
  const isCritical = timeLeft <= 5;

  const strokeColor = isCritical
    ? "stroke-neon-pink"
    : isWarning
      ? "stroke-neon-yellow"
      : "stroke-neon-cyan";

  const textColor = isCritical
    ? "text-neon-pink"
    : isWarning
      ? "text-neon-yellow"
      : "text-neon-cyan";

  const glowClass = isCritical
    ? "drop-shadow-neon-pink"
    : "drop-shadow-neon-cyan";

  return (
    <div className="relative w-14 h-14 flex-shrink-0">
      <svg viewBox="0 0 60 60" className={`-rotate-90 w-full h-full ${glowClass}`}>
        <circle
          cx="30" cy="30" r="26"
          className="fill-none stroke-white/5"
          strokeWidth="3"
        />
        <circle
          cx="30" cy="30" r="26"
          className={`fill-none ${strokeColor} timer-ring-transition`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={`${(percentage / 100) * 163.36} 163.36`}
        />
      </svg>
      <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-mono font-bold ${textColor} ${isCritical ? "animate-pulse" : ""}`}>
        {timeLeft}
      </span>
    </div>
  );
}

export default Timer;
