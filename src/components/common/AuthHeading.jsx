const AuthHeading = ({ children, heading, className }) => {
    return (
        <div className={`mb-10 ${className}`}>
            <h1 className="text-3xl font-bold text-center text-white mb-4">
                {heading}
            </h1>
            {children}
        </div>
    )
}

export default AuthHeading
