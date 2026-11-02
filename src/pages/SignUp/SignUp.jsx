import React, { useState } from "react";
import { LuNotebookPen } from "react-icons/lu";
import { Link } from "react-router";
import { toast } from "react-toastify";

const SignUp = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Function submit triggered")
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        console.log("Email:", email);
        console.log("Password:", password);

        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, password }),
            },
            );
            const data = await response.json();
            console.log(data, "data");
            if (data.success) {
                toast.success(data.message || "Account created successfully! Please log in.",);
            } else {
                throw new Error(data.message || "Failed to create account.");
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message || "An error occurred. Please try again.")
        }

    };

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
                            Create Account
                        </h1>

                        <p className="text-slate-400 mt-2">
                            Sign up to continue to your account
                        </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-5" onSubmit={handleSubmit}>

                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Name
                            </label>

                            <input
                                type="text"
                                placeholder="Your name"
                                name="name"
                                className="w-full px-4 py-3.5 rounded-xl bg-slate-900/70 border border-slate-700 text-white placeholder-slate-500 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                            />
                        </div>
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


                        {/* Sign In Button */}
                        <button
                            type="submit"
                            className="w-full py-3.5 rounded-xl bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg shadow-purple-600/20 hover:from-purple-500 hover:to-pink-500 hover:shadow-purple-600/30 transition duration-300 cursor-pointer"
                        >
                            Sign Up
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


                    {/* Sign Up */}
                    <p className="text-center text-sm text-slate-400 mt-7">
                        Already have an account?{" "}
                        <Link
                            to="/sign-in"
                            className="text-purple-400 hover:text-purple-300 font-medium transition"
                        >
                            Sign In
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default SignUp;