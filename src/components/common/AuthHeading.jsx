const AuthHeading = ({ children, heading, className, isReset }) => {
  return (
    <div className={`mb-10 ${className}`}>
      <h1
        className={`text-3xl font-bold text-center  mb-4 ${
          isReset ? "text-[#00131F]" : "text-white"
        }`}
      >
        {heading}
      </h1>
      {children}
    </div>
  );
};

export default AuthHeading;
