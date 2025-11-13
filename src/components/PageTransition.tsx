interface PageTransitionProps {
  isActive: boolean;
  onComplete: () => void;
  direction: 'enter' | 'exit';
}

const PageTransition = ({ isActive, onComplete, direction }: PageTransitionProps) => {
  if (!isActive) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9999]"
      onAnimationEnd={onComplete}
    >
      <div
        className="absolute h-[200vh] w-[150vw] top-[-50vh]"
        style={{
          background: "linear-gradient(135deg, #08242A 16.83%, #037457 39.42%, #1FC976 81.25%, #A4F4C1 100%)",
          transform: "rotate(-15deg)",
          animation: direction === 'enter' 
            ? "swipe-enter 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards"
            : "swipe-exit 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        }}
      />
      <style>
        {`
          @keyframes swipe-enter {
            0% {
              transform: translateX(100%) rotate(-15deg);
            }
            100% {
              transform: translateX(0%) rotate(-15deg);
            }
          }
          
          @keyframes swipe-exit {
            0% {
              transform: translateX(0%) rotate(-15deg);
            }
            100% {
              transform: translateX(-100%) rotate(-15deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default PageTransition;
