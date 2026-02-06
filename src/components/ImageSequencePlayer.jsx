import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ImageSequencePlayer({
    sequencePath,
    frameCount,
    fps = 30,
    className = "",
    fullScreen = false
}) {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let isMounted = true;
        const loadImages = async () => {
            const loadedImages = [];
            let loadedCount = 0;

            for (let i = 1; i <= frameCount; i++) {
                if (!isMounted) return;
                const img = new Image();
                // Pad number with leading zeros (e.g., 001, 002, ..., 151)
                const frameNumber = i.toString().padStart(3, '0');
                img.src = `${sequencePath}/ezgif-frame-${frameNumber}.png`;

                await new Promise((resolve) => {
                    img.onload = () => {
                        loadedCount++;
                        setProgress(Math.round((loadedCount / frameCount) * 100));
                        resolve();
                    };
                    img.onerror = resolve; // Continue even if one fails
                });

                loadedImages.push(img);
            }

            if (isMounted) {
                setImages(loadedImages);
                setLoading(false);
            }
        };

        loadImages();

        return () => {
            isMounted = false;
        };
    }, [sequencePath, frameCount]);

    useEffect(() => {
        if (loading || images.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let currentFrame = 0;
        let lastTime = 0;
        const interval = 1000 / fps;

        const resizeCanvas = () => {
            if (fullScreen) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            } else {
                canvas.width = canvas.parentElement.clientWidth;
                canvas.height = canvas.parentElement.clientHeight;
            }
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const render = (time) => {
            const deltaTime = time - lastTime;

            if (deltaTime >= interval) {
                lastTime = time - (deltaTime % interval);

                // Clear and draw
                // ctx.clearRect(0, 0, canvas.width, canvas.height); // Not needed if drawing full image

                const img = images[currentFrame];
                if (img) {
                    // "Cover" fit directly on canvas
                    const hRatio = canvas.width / img.width;
                    const vRatio = canvas.height / img.height;
                    const ratio = Math.max(hRatio, vRatio);

                    const centerShift_x = (canvas.width - img.width * ratio) / 2;
                    const centerShift_y = (canvas.height - img.height * ratio) / 2;

                    ctx.drawImage(img,
                        0, 0, img.width, img.height,
                        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
                    );
                }

                currentFrame = (currentFrame + 1) % images.length;
            }

            animationFrameId = requestAnimationFrame(render);
        };

        animationFrameId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [loading, images, fps, fullScreen]);

    return (
        <div className={`relative overflow-hidden ${fullScreen ? 'fixed inset-0 z-0' : 'w-full h-full'} ${className}`}>
            <canvas ref={canvasRef} className="block w-full h-full object-cover" />

            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-stone-900 z-10">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
                        <p className="text-white text-sm tracking-widest uppercase">Loading Experience... {progress}%</p>
                    </div>
                </div>
            )}
        </div>
    );
}
