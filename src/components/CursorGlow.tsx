import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        className="fixed pointer-events-none z-10 w-40 h-40 rounded-full blur-3xl opacity-40 bg-indigo-500 transition-all duration-100"
        style={{
          left: pos.x - 80,
          top: pos.y - 80,
        }}
      />
      <div
        className="fixed pointer-events-none z-10 w-16 h-16 rounded-full blur-2xl opacity-50 bg-purple-500 transition-all duration-75"
        style={{
          left: pos.x - 32,
          top: pos.y - 32,
        }}
      />
    </>
  );
};

export default CursorGlow;