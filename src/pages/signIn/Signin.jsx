import React, { useState } from "react";
import { LuNotebookPen } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/useAuth";

const Signin = () => {

    const { user, setUser } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    console.log(location, 'location')

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            console.log(data, "data");

            if (data.success) {
                toast.success(data.message || "Logged in successfully!");
                setUser(data.data?.user);
                navigate(from)
            } else {
                throw new Error(data.message || "Failed to log in.");
            }

        } catch (error) {
            console.error("Error during login:", error);
            toast.error(error.message || "An error occurred. Please try again.");

        }
    };

    console.log(user, setUser);

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">

            {/* Background Glow */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />

            {/* Sign In Card */}
            <div className="relative w-full max-w-md">
                <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl">

                    {/* Logo */}
                    <div className="flex justify-center mb-6">
                        <span className="inline-block bg-[#0e7c66] p-3 rounded-full">
                            <LuNotebookPen className="text-white h-8.75 w-8.75" />
                        </span>
                    </div>

                    {/* Heading */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white">
                            Welcome Back
                        </h1>

                        <p className="text-slate-400 mt-2">
                            Sign in to continue to your account
                        </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-5" onSubmit={handleSubmit}>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Email Address
                            </label>

                            <input
                                type="email"
                                placeholder="you@example.com"
                                name="email"
                                className="w-full px-4 py-3.5 rounded-xl bg-slate-900/70 border border-slate-700 text-white placeholder-slate-500 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="text-sm font-medium text-slate-300">
                                    Password
                                </label>

                                <a
                                    href="#"
                                    className="text-sm text-purple-400 hover:text-purple-300 transition"
                                >
                                    Forgot password?
                                </a>
                            </div>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    name="password"
                                    className="w-full px-4 py-3.5 pr-12 rounded-xl bg-slate-900/70 border border-slate-700 text-white placeholder-slate-500 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="remember"
                                className="w-4 h-4 accent-purple-600"
                            />

                            <label
                                htmlFor="remember"
                                className="text-sm text-slate-400"
                            >
                                Remember me
                            </label>
                        </div>

                        {/* Sign In Button */}
                        <button
                            type="submit"
                            className="w-full py-3.5 rounded-xl bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg shadow-purple-600/20 hover:from-purple-500 hover:to-pink-500 hover:shadow-purple-600/30 transition duration-300 cursor-pointer"
                        >
                            Sign In
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-7">
                        <div className="h-px flex-1 bg-slate-700" />
                        <span className="text-sm text-slate-500">
                            OR
                        </span>
                        <div className="h-px flex-1 bg-slate-700" />
                    </div>

                    {/* Google Button */}
                    <button
                        type="button"
                        className="w-full py-3.5 rounded-xl border border-slate-700 bg-slate-900/50 text-white font-medium hover:bg-slate-800 transition flex items-center justify-center gap-3"
                    >
                        <span className="text-lg font-bold">G</span>
                        Continue with Google
                    </button>

                    {/* Sign Up */}
                    <p className="text-center text-sm text-slate-400 mt-7">
                        Don't have an account?{" "}
                        <Link
                            to="/sign-up"
                            className="text-purple-400 hover:text-purple-300 font-medium transition"
                        >
                            Create account
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Signin;