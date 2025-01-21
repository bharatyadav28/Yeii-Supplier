const ProgressBar = ({ milestones, current }) => {
  return (
    <div className="relative w-full bg-gray-200 h-4 rounded-full">
      {/* Achieved section */}
      <div
        className="absolute top-0 left-0 h-4 bg-blue-500 rounded-full"
        style={{ width: `${(current / milestones.length) * 100}%` }}
      ></div>

      {/* Milestones */}
      <div className="absolute top-0 left-0 w-full flex justify-between">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full border-2 ${
              index < current
                ? "bg-blue-500 border-blue-500"
                : "bg-white border-gray-400"
            }`}
            style={{
              transform: "translate(-50%, -50%)",
              position: "absolute",
              left: `${(index / (milestones.length - 1)) * 100}%`,
              top: "-50%",
            }}
          >
            {/* Optional: Milestone labels */}
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs">
              {milestone}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
