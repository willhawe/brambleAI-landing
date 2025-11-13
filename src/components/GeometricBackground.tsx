import { useState, useEffect } from "react";

interface GeometricBackgroundProps {
  animate?: boolean;
}

const GeometricBackground = ({ animate = true }: GeometricBackgroundProps) => {
  const [isRevealing, setIsRevealing] = useState(!animate);
  const [hasAnimated, setHasAnimated] = useState(!animate);

  useEffect(() => {
    if (!animate) {
      setIsRevealing(true);
      setHasAnimated(true);
      return;
    }

    const hasVisited = sessionStorage.getItem("bramble-visited");
    
    if (!hasVisited) {
      // First visit - trigger reveal animation
      setTimeout(() => {
        setIsRevealing(true);
      }, 500);

      // Mark as visited and end animation after completion
      setTimeout(() => {
        sessionStorage.setItem("bramble-visited", "true");
        setHasAnimated(true);
      }, 3500);
    } else {
      // Already visited - skip animation
      setIsRevealing(true);
      setHasAnimated(true);
    }
  }, [animate]);

  const rectangles = [
    // Rectangle 1 - Bottom left diagonal
    {
      initial: { left: "24px", top: "556px", transform: "rotate(-62.9deg)" },
      final: {
        background: "linear-gradient(135deg, #08242A 16.83%, #037457 39.42%, #1FC976 81.25%, #A4F4C1 100%)",
        width: "474px",
        height: "1005px",
        left: "23px",
        top: "555px",
        transform: "rotate(-63deg)",
        transformOrigin: "0 0",
        zIndex: 1,
      },
      delay: 0,
    },
    // Rectangle 2 - Top left sweep
    {
      initial: { left: "196px", top: "212px", transform: "rotate(-67.9deg)" },
      final: {
        background: "linear-gradient(135deg, #A4F4C1 0%, #42CC76 18.75%, #1E8E57 60.58%, #083E27 83.17%)",
        width: "570px",
        height: "805px",
        left: "195px",
        top: "211px",
        transform: "rotate(-68deg)",
        transformOrigin: "0 0",
        zIndex: 2,
      },
      delay: 100,
    },
    // Rectangle 3 - Top center radial
    {
      initial: { left: "239px", top: "-455px", transform: "rotate(51.9deg)" },
      final: {
        background: "radial-gradient(circle at center, #08242A 16.83%, #037457 39.42%, #1FC976 81.25%, #A4F4C1 100%)",
        width: "502px",
        height: "694px",
        left: "238px",
        top: "-456px",
        transform: "rotate(52deg)",
        transformOrigin: "0 0",
        zIndex: 3,
      },
      delay: 200,
    },
    // Rectangle 4 - Left middle vertical
    {
      initial: { left: "-7px", top: "88px", transform: "rotate(16.9deg)" },
      final: {
        background: "linear-gradient(180deg, #A4F4C1 0%, #42CC76 18.75%, #1E8E57 60.58%, #083E27 83.17%)",
        width: "460px",
        height: "867px",
        left: "-8px",
        top: "87px",
        transform: "rotate(17deg)",
        transformOrigin: "0 0",
        zIndex: 4,
      },
      delay: 150,
    },
    // Rectangle 5 - Right upper diagonal
    {
      initial: { left: "969px", top: "221px", transform: "rotate(16.9deg)" },
      final: {
        background: "linear-gradient(135deg, #083E27 16.83%, #1E8E57 39.42%, #42CC76 81.25%, #A4F4C1 100%)",
        width: "594px",
        height: "779px",
        left: "968px",
        top: "220px",
        transform: "rotate(17deg)",
        transformOrigin: "0 0",
        zIndex: 5,
      },
      delay: 250,
    },
    // Rectangle 6 - Right middle steep
    {
      initial: { left: "705px", top: "133px", transform: "rotate(-62.9deg)" },
      final: {
        background: "linear-gradient(135deg, #08242A 16.83%, #037457 39.42%, #1FC976 81.25%, #A4F4C1 100%)",
        width: "505px",
        height: "990px",
        left: "704px",
        top: "132px",
        transform: "rotate(-63deg)",
        transformOrigin: "0 0",
        zIndex: 6,
      },
      delay: 300,
    },
    // Rectangle 7 - Bottom center overlay
    {
      initial: { left: "-32px", top: "1242px", transform: "matrix(0.829038, 0.559193, 0.559193, -0.829038, 0, 0)" },
      final: {
        background: "linear-gradient(135deg, #08242A 16.83%, #037457 39.42%, #1FC976 81.25%, #A4F4C1 100%)",
        width: "1052px",
        height: "878px",
        left: "-34px",
        top: "1241px",
        transform: "matrix(0.829038, 0.559193, 0.559193, -0.829038, 0, 0)",
        transformOrigin: "0 0",
        opacity: 0.69,
        zIndex: 7,
      },
      delay: 350,
    },
    // Rectangle 8 - Bottom right angle
    {
      initial: { left: "839px", top: "744px", transform: "rotate(-25.9deg)" },
      final: {
        background: "linear-gradient(135deg, #083E27 16.83%, #1E8E57 39.42%, #42CC76 81.25%, #A4F4C1 100%)",
        width: "750px",
        height: "1051px",
        left: "838px",
        top: "743px",
        transform: "rotate(-26deg)",
        transformOrigin: "0 0",
        opacity: 0.7,
        zIndex: 8,
      },
      delay: 400,
    },
    // Rectangle 9 - Top right vertical
    {
      initial: { left: "1491px", top: "-546px", transform: "rotate(84.9deg)" },
      final: {
        background: "linear-gradient(135deg, #083E27 16.83%, #1E8E57 39.42%, #42CC76 81.25%, #A4F4C1 100%)",
        width: "750px",
        height: "1051px",
        left: "1490px",
        top: "-548px",
        transform: "rotate(85deg)",
        transformOrigin: "0 0",
        opacity: 0.4,
        zIndex: 9,
      },
      delay: 450,
    },
    // Rectangle 10 - Bottom far left
    {
      initial: { left: "-31px", top: "1035px", transform: "rotate(-62.9deg)" },
      final: {
        background: "linear-gradient(135deg, #08242A 16.83%, #037457 39.42%, #1FC976 81.25%, #A4F4C1 100%)",
        width: "505px",
        height: "990px",
        left: "-32px",
        top: "1034px",
        transform: "rotate(-63deg)",
        transformOrigin: "0 0",
        zIndex: 10,
      },
      delay: 500,
    },
  ];

  // Subtle idle animations for each rectangle
  const idleAnimations = [
    "idle-float-1 25s ease-in-out infinite",
    "idle-float-2 30s ease-in-out infinite",
    "idle-float-3 28s ease-in-out infinite",
    "idle-float-4 32s ease-in-out infinite",
    "idle-float-5 27s ease-in-out infinite",
    "idle-float-6 29s ease-in-out infinite",
    "idle-float-7 31s ease-in-out infinite",
    "idle-float-8 26s ease-in-out infinite",
    "idle-float-9 33s ease-in-out infinite",
    "idle-float-10 28s ease-in-out infinite",
  ];

  return (
    <>
      <style>{`
        @keyframes idle-float-1 {
          0%, 100% { transform: translate(0, 0) rotate(-63deg); }
          33% { transform: translate(15px, -20px) rotate(-62.5deg); }
          66% { transform: translate(-10px, 15px) rotate(-63.3deg); }
        }
        @keyframes idle-float-2 {
          0%, 100% { transform: translate(0, 0) rotate(-68deg); }
          33% { transform: translate(-20px, 15px) rotate(-68.5deg); }
          66% { transform: translate(12px, -18px) rotate(-67.7deg); }
        }
        @keyframes idle-float-3 {
          0%, 100% { transform: translate(0, 0) rotate(52deg); }
          33% { transform: translate(22px, 18px) rotate(51.5deg); }
          66% { transform: translate(-15px, -12px) rotate(52.3deg); }
        }
        @keyframes idle-float-4 {
          0%, 100% { transform: translate(0, 0) rotate(17deg); }
          33% { transform: translate(-15px, -20px) rotate(17.5deg); }
          66% { transform: translate(18px, 10px) rotate(16.7deg); }
        }
        @keyframes idle-float-5 {
          0%, 100% { transform: translate(0, 0) rotate(17deg); }
          33% { transform: translate(20px, 25px) rotate(16.5deg); }
          66% { transform: translate(-12px, -15px) rotate(17.3deg); }
        }
        @keyframes idle-float-6 {
          0%, 100% { transform: translate(0, 0) rotate(-63deg); }
          33% { transform: translate(-25px, 15px) rotate(-63.5deg); }
          66% { transform: translate(15px, -20px) rotate(-62.7deg); }
        }
        @keyframes idle-float-7 {
          0%, 100% { transform: translate(0, 0) matrix(0.829038, 0.559193, 0.559193, -0.829038, 0, 0); }
          33% { transform: translate(15px, -15px) matrix(0.829038, 0.559193, 0.559193, -0.829038, 0, 0); }
          66% { transform: translate(-10px, 12px) matrix(0.829038, 0.559193, 0.559193, -0.829038, 0, 0); }
        }
        @keyframes idle-float-8 {
          0%, 100% { transform: translate(0, 0) rotate(-26deg); }
          33% { transform: translate(-20px, 20px) rotate(-26.5deg); }
          66% { transform: translate(15px, -15px) rotate(-25.7deg); }
        }
        @keyframes idle-float-9 {
          0%, 100% { transform: translate(0, 0) rotate(85deg); }
          33% { transform: translate(25px, -20px) rotate(84.5deg); }
          66% { transform: translate(-15px, 18px) rotate(85.3deg); }
        }
        @keyframes idle-float-10 {
          0%, 100% { transform: translate(0, 0) rotate(-63deg); }
          33% { transform: translate(-15px, 25px) rotate(-63.5deg); }
          66% { transform: translate(20px, -12px) rotate(-62.7deg); }
        }
      `}</style>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {rectangles.map((rect, index) => {
          const currentStyle = isRevealing ? rect.final : rect.initial;
          
          return (
            <div
              key={index}
              className="absolute"
              style={{
                ...currentStyle,
                zIndex: rect.final.zIndex,
                transition: `all 3.75s cubic-bezier(0.4, 0, 0.2, 1) ${rect.delay}ms`,
                animation: hasAnimated ? idleAnimations[index] : 'none',
                willChange: "transform",
                backfaceVisibility: "hidden",
                WebkitFontSmoothing: "antialiased",
                filter: "blur(0.5px)",
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default GeometricBackground;
