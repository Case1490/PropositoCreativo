import { useEffect, useRef, useState } from "react";
import Video from "../assets/HOMBRE_FOCO_ANIMADO3D.webm";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video && isVisible) {
      video.play().catch((e) => console.log("Blocked autoplay:", e));
    }
  }, [isVisible]);

  const handleEnableSound = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.volume = 1;
      video.play();
      setSoundEnabled(true);
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        src={Video}
        muted={!soundEnabled}
        loop
        playsInline
        className="w-full h-full object-cover"
      />
      {!soundEnabled && (
        <button
          onClick={handleEnableSound}
          className="absolute top-4 right-4 bg-white/80 text-black px-4 py-2 rounded-xl shadow-lg text-sm hover:bg-white"
        >
          🔊 Activar sonido
        </button>
      )}
    </div>
  );
};

export default VideoSection;
