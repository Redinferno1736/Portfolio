import React, { useRef, useEffect } from "react";

const CombinedCanvas = () => {
  const canvasRef = useRef(null);
  const grainRef = useRef(null);

  useEffect(() => {
    // --- CanvasGradient logic ---
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    let anim = { x: canvas.width / 2, y: canvas.height / 2 };

    const lerp = (start, end, amt) => start + (end - start) * amt;
    const speed = 0.01;

    const draw = () => {
      anim.x = lerp(anim.x, mouse.x, speed);
      anim.y = lerp(anim.y, mouse.y, speed);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const gradient = ctx.createRadialGradient(
        anim.x, anim.y, 0,
        anim.x, anim.y, 300
      );
      gradient.addColorStop(0, "rgba(19, 112, 98, 1.0)");
      gradient.addColorStop(1, "rgba(34, 34, 34, 1.0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      requestAnimationFrame(draw);
    };

    canvas.onmousemove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    // Handle resize for CanvasGradient
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    draw();

    // --- Noise logic ---
    const noiseCanvas = grainRef.current;
    const noiseCtx = noiseCanvas.getContext('2d');
    let frame = 0;

    const patternSize = 250;
    const patternAlpha = 15;
    const patternRefreshInterval = 2;

    const patternCanvas = document.createElement('canvas');
    patternCanvas.width = patternSize;
    patternCanvas.height = patternSize;
    const patternCtx = patternCanvas.getContext('2d');
    const patternData = patternCtx.createImageData(patternSize, patternSize);
    const patternPixelDataLength = patternSize * patternSize * 4;

    const resizeNoise = () => {
      noiseCanvas.width = window.innerWidth;
      noiseCanvas.height = window.innerHeight;
      noiseCtx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform before scaling
    };

    const updatePattern = () => {
      for (let i = 0; i < patternPixelDataLength; i += 4) {
        const value = Math.random() * 255;
        patternData.data[i] = value;
        patternData.data[i + 1] = value;
        patternData.data[i + 2] = value;
        patternData.data[i + 3] = patternAlpha;
      }
      patternCtx.putImageData(patternData, 0, 0);
    };

    const drawGrain = () => {
      noiseCtx.clearRect(0, 0, noiseCanvas.width, noiseCanvas.height);
      noiseCtx.fillStyle = noiseCtx.createPattern(patternCanvas, 'repeat');
      noiseCtx.fillRect(0, 0, noiseCanvas.width, noiseCanvas.height);
    };

    const loopNoise = () => {
      if (frame % patternRefreshInterval === 0) {
        updatePattern();
        drawGrain();
      }
      frame++;
      window.requestAnimationFrame(loopNoise);
    };

    window.addEventListener('resize', resizeNoise);
    resizeNoise();
    loopNoise();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', resizeNoise);
    };
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient */}
      <div
        className="bg-gradient-to-b from-[#1f1f1f] to-[#424242] grad"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          opacity: 0.85,
          width: '100%',
          height: '100%',
        }}
      />
      {/* Canvas gradient */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
      {/* Noise overlay */}
      <canvas
        ref={grainRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 3,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default CombinedCanvas;
