"use client";

import { useRef, useState } from "react";
import { PlayMusicIcon, StopMusicIcon } from "@/components/icons";

type MusicButtonProps = {
  labels: {
    play: string;
    pause: string;
  };
  src: string;
};

export function MusicButton({ labels, src }: MusicButtonProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex justify-center">
      <audio ref={audioRef} src={src} onEnded={() => setIsPlaying(false)} />
      <button
        type="button"
        onClick={toggleMusic}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d9bf82] bg-[#fffdf8]/90 px-5 py-2.5 text-sm font-semibold text-[#173a5e] shadow-lg shadow-[#173a5e]/10 backdrop-blur transition hover:border-[#c9a45c] hover:bg-[#fffdf8]"
      >
        {isPlaying ? (
          <StopMusicIcon className="invitation-icon h-5 w-5" />
        ) : (
          <PlayMusicIcon className="invitation-icon h-5 w-5" />
        )}
        {isPlaying ? labels.pause : labels.play}
      </button>
    </div>
  );
}
