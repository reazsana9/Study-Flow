const NotFound = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 overflow-hidden">
            <div className="relative w-full max-w-4xl text-center">

                {/* Background Glow */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>

                {/* Content */}
                <div className="relative z-10">

                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400 mb-6">
                        Error 404
                    </p>

                    <h1 className="text-[120px] sm:text-[180px] md:text-[220px] leading-none font-black tracking-tighter bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                        404
                    </h1>

                    <h2 className="mt-6 text-3xl sm:text-4xl font-bold">
                        Page not found
                    </h2>

                    <p className="mt-4 max-w-md mx-auto text-slate-400 text-base sm:text-lg leading-relaxed">
                        The page you are looking for does not exist or has been moved to
                        another location.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

                        <button
                            onClick={() => window.history.back()}
                            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-700
              bg-slate-900 hover:bg-slate-800 transition duration-300"
                        >
                            Go Back
                        </button>

                        <a
                            href="/"
                            className="w-full sm:w-auto px-6 py-3 rounded-xl
              bg-gradient-to-r from-purple-600 to-pink-600
              hover:from-purple-500 hover:to-pink-500
              transition duration-300 shadow-lg shadow-purple-500/20"
                        >
                            Back to Home
                        </a>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default NotFound;