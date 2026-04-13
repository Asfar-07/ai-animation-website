import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import './HeroSection.css';

const frameCount = 240;
const currentFrame = (index) => `/images/hero/ezgif-frame-${index.toString().padStart(3, '0')}.png`;

const HeroSection = () => {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);
  const images = useRef([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Measure scroll over this specific 400vh container
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"]
  });

  // Preload images into memory for rendering onto canvas
  useEffect(() => {
    let loadedCount = 0;
    
    // We'll load the first frame initially to show immediately, then lazy-load others
    const loadImages = async () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        img.onload = () => {
          loadedCount++;
          if (loadedCount === frameCount) {
             setImagesLoaded(true);
          }
        };
        images.current.push(img);
      }
    };
    
    loadImages();
    
    // Fallback draw first frame as soon as it exists
    const img1 = new Image();
    img1.src = currentFrame(1);
    img1.onload = () => {
      drawCanvas(img1);
    }
  }, []);

  const drawCanvas = (img) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const context = canvas.getContext("2d");
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, 0, 0, img.width, img.height,
                      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
  };

  // On scroll update, draw the specific frame
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.current.length === 0) return;
    
    const frameIndex = Math.min(
      frameCount - 1,
      Math.max(0, Math.floor(latest * frameCount))
    );
    
    const img = images.current[frameIndex];
    if (img && img.complete) {
        drawCanvas(img);
    }
  });

  // Re-draw on window resize so canvas doesn't stretch or distort
  useEffect(() => {
    const handleResize = () => {
        if (images.current.length === 0) return;
        const latest = scrollYProgress.get();
        const frameIndex = Math.min(frameCount - 1, Math.floor(latest * frameCount));
        const img = images.current[frameIndex];
        if (img && img.complete) {
            drawCanvas(img);
        }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [scrollYProgress]);

  // Scroll mapping for text overlays
  
  // 1) Title fades out early (0% to 15%)
  const titleOpacity = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [1, 1, 0, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.15], [0, -100]);



  return (
    <div ref={heroRef} className="hero-scroll-container">
      <div className="hero-sticky">
        <canvas ref={canvasRef} className="hero-canvas" />

        <div className="hero-overlays">
          <motion.div 
            style={{ opacity: titleOpacity, y: titleY }}
            className="hero-text-block title-block"
          >
            <h1 className="hero-title">
              Lighter than Air.<br />
              <span className="emphasis">Faster than Thought.</span>
            </h1>
          </motion.div>




        </div>
      </div>
    </div>
  );
};

export default HeroSection;
