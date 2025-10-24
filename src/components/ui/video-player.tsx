"use client";

import React, { useEffect } from "react";
import { useQuizStore } from "@/store/slices/lesson.slice";

interface VideoPlayerProps {
  src: string;
  className?: string;
}

const VideoPlayer = ({ src, className = "" }: VideoPlayerProps) => {
  const setQuizStarted = useQuizStore((state) => state.setQuizStarted);

  useEffect(() => {
    setQuizStarted(false);
  }, []);

  // Convert YouTube URL to embed format
  const getYouTubeEmbedUrl = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url?.match(regExp);
    
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`;
    }
    
    // If it's already an embed URL, return as is
    if (url?.includes('youtube.com/embed/')) {
      return url;
    }
    
    return url;
  };

  const embedUrl = getYouTubeEmbedUrl(src);

  return (
    <div className={`relative w-full aspect-video bg-black rounded-lg overflow-hidden ${className}`}>
      <iframe
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
};

export default VideoPlayer; 