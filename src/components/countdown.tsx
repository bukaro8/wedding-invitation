"use client";

import { useEffect, useState } from "react";

type CountdownLabels = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  completed: string;
};

type CountdownProps = {
  labels: CountdownLabels;
  targetDate: string;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(targetDate: string): TimeLeft | null {
  const difference = new Date(targetDate).getTime() - Date.now();

  if (difference <= 0) {
    return null;
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export function Countdown({ labels, targetDate }: CountdownProps) {
  const [hasMounted, setHasMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setHasMounted(true);
    setTimeLeft(getTimeLeft(targetDate));

    const intervalId = window.setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [targetDate]);

  if (hasMounted && !timeLeft) {
    return (
      <p className="mt-6 rounded-2xl border border-[#eadcc2] bg-[#fbf8f1] px-4 py-5 text-sm font-semibold text-[#173a5e]">
        {labels.completed}
      </p>
    );
  }

  const items = [
    { label: labels.days, value: timeLeft?.days },
    { label: labels.hours, value: timeLeft?.hours },
    { label: labels.minutes, value: timeLeft?.minutes },
    { label: labels.seconds, value: timeLeft?.seconds },
  ];

  return (
    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-[#eadcc2] bg-[#fbf8f1] px-3 py-5"
        >
          <p className="font-script text-5xl font-normal text-[#173a5e]">
            {typeof item.value === "number"
              ? String(item.value).padStart(2, "0")
              : "--"}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#8f7747]">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
