"use client"
import { useEffect, useRef } from "react";

const DottedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawDots();
    };

    const drawDots = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const dotSize = 2; // Size of dots
      const spacing = 35; // Space between dots

      for (let x = canvas.width/2; x < canvas.width; x += spacing) {
        for (let y = canvas.height/2; y < canvas.height; y += spacing) {
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff66"; // Light white dots
          ctx.fill();
        }
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full p-5 -z-50 " />;
};

export default DottedBackground;
