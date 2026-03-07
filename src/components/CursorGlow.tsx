import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        left: position.x - 100,
        top: position.y - 100,
      }}
      className="fixed w-[200px] h-[200px] rounded-full pointer-events-none blur-3xl opacity-20 bg-indigo-500 z-0 transition-all duration-75"
    />
  );
};

export default CursorGlow;