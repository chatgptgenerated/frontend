"use client";

import Image from "next/image";
import { useState } from "react";

export default function Register() {
  const [selectedRole, setSelectedRole] = useState(""); // Track selected button

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 p-6">
      {/* Header */}
      <header className="w-full flex justify-between items-center p-4 fixed top-0 left-0 bg-white shadow-md z-10">
        <div className="h-14 w-14">
          <Image src="/logo1.svg" alt="App logo" width={56} height={56} />
        </div>
        <nav className="flex gap-6 text-lg">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
          <a href="/login">
            <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Login
            </button>
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1 w-full max-w-md mt-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8">Create an Account</h1>

        {/* Form */}
        <form className="w-full flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setSelectedRole("assist")}
              className={`w-full py-3 border rounded-lg ${
                selectedRole === "assist"
                  ? "bg-green-500 text-white border-green-500"
                  : "text-gray-800 border-gray-800 hover:bg-gray-100"
              }`}
            >
              I want to assist
            </button>
            <button
              type="button"
              onClick={() => setSelectedRole("need")}
              className={`w-full py-3 border rounded-lg ${
                selectedRole === "need"
                  ? "bg-green-500 text-white border-green-500"
                  : "text-gray-800 border-gray-800 hover:bg-gray-100"
              }`}
            >
              I need assistance
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-900"
          >
            GET STARTED
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            LOGIN HERE
          </a>
        </p>
      </main>
    </div>
  );
}
