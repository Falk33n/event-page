"use client";

import { useEffect, useRef } from "react";

type Star = {
  /** Horizontal position of the star. */
  x: number;

  /** Vertical position of the star. */
  y: number;

  /** Depth of the star (used for perspective scaling and movement). */
  z: number;
};

type InitializeStarsProps = {
  /** Width of the canvas. */
  width: number;

  /** Height of the canvas. */
  height: number;

  /** The HTML canvas element to draw on. */
  canvas: HTMLCanvasElement;
};

type InitializeStarsReturnProps = {
  /** Width of the canvas. */
  width: number;

  /** Height of the canvas. */
  height: number;

  /** Array of stars to animate. */
  stars: Star[];
};

/**
 * Generates and initializes stars for a starfield animation.
 *
 * @param {InitializeStarsProps} props - Canvas and size properties.
 * @param {HTMLCanvasElement} props.canvas - The canvas element on which the stars will be drawn.
 * @param {number} props.width - The initial width of the canvas. Will be updated to the canvas's actual width.
 * @param {number} props.height - The initial height of the canvas. Will be updated to the canvas's actual height.
 *
 * @returns {InitializeStarsReturnProps} Object containing the array of stars and the updated canvas dimensions.
 *
 * @example
 * const { stars, width, height } = initializeStars({ canvas, width: 800, height: 600 });
 */
function initializeStars({
  canvas,
  height,
  width,
}: InitializeStarsProps): InitializeStarsReturnProps {
  // Update width/height based on canvas container size
  width = canvas.offsetWidth;
  height = canvas.offsetHeight;
  canvas.width = width;
  canvas.height = height;

  // Random spread for x/y positions to avoid clustering at the center
  const randomSpread = () => (Math.random() - 0.5) * 2.5;

  return {
    stars: Array.from(
      { length: Math.floor((width * height) / 2500) }, // Number of stars scales with canvas area
      () => ({
        x: width / 2 + randomSpread() * width, // Spread around the center
        y: height / 2 + randomSpread() * height,
        z: Math.random() * width, // Depth for perspective effect
      })
    ),
    width,
    height,
  };
}

type AnimateProps = {
  /** 2D rendering context of the canvas. */
  ctx: CanvasRenderingContext2D;

  /** Width of the canvas. */
  width: number;

  /** Height of the canvas. */
  height: number;

  /** Array of stars to animate. */
  stars: Star[];
};

/**
 * Animates the starfield on the given canvas context.
 *
 * @param {AnimateProps} props - Canvas context, dimensions, and stars array.
 * @param {CanvasRenderingContext2D} props.ctx - The 2D rendering context of the canvas.
 * @param {number} props.width - The width of the canvas.
 * @param {number} props.height - The height of the canvas.
 * @param {Star[]} props.stars - Array of stars to animate, each with x, y, and z coordinates.
 *
 * @example
 * animate({ ctx: canvas.getContext("2d"), width: 800, height: 600, stars });
 */
function animate({ ctx, height, width, stars }: AnimateProps) {
  const cssFile = getComputedStyle(document.documentElement);
  const backgroundColor = cssFile.getPropertyValue("--background").trim();
  let starColor = cssFile.getPropertyValue("--foreground").trim();

  if (document.documentElement.classList.contains("dark")) {
    starColor = starColor.replace(/\)$/, " / 0.4)");
  } else {
    starColor = starColor.replace(/\)$/, " / 0.2)");
  }

  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, width, height);

  for (const star of stars) {
    star.z -= 1; // Move star forward along z-axis
    if (star.z <= 0) star.z = width; // Reset depth if past viewer

    const px = (star.x - width / 2) * (128 / star.z) + width / 2;
    const py = (star.y - height / 2) * (128 / star.z) + height / 2;

    if (px >= 0 && px <= width && py >= 0 && py <= height) {
      const size = (1 - star.z / width) * 4; // Size decreases with depth
      ctx.fillStyle = starColor;
      ctx.fillRect(px, py, size, size);
    }
  }

  requestAnimationFrame(() => animate({ ctx, height, stars, width }));
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let stars: { x: number; y: number; z: number }[] = [];

    const {
      stars: newStars,
      width: newWidth,
      height: newHeight,
    } = initializeStars({ canvas, width, height });
    stars = newStars;
    width = newWidth;
    height = newHeight;

    // Re-initialize stars if canvas resizes
    const observer = new ResizeObserver(() => {
      const {
        stars: newStars,
        width: newWidth,
        height: newHeight,
      } = initializeStars({ canvas, width, height });
      stars = newStars;
      width = newWidth;
      height = newHeight;
    });
    observer.observe(canvas);

    animate({ ctx, height, stars, width });

    return () => observer.disconnect();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
