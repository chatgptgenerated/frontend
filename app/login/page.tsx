"use client";

import { useState } from "react";
import Image from "next/image";
import { GetAuthState, LoginUser } from "../scripts/callers";
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent the default form submission

    // API call logic
    try {
      const response = await LoginUser(email, password, true);
      console.log(response);

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
        router.push("/addHelpee");
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData.message);
        router.push("/login");
        // Handle login error (e.g., show error message to user)
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
    const response2 = await GetAuthState();
    const data2 = await response2.json();
    console.log(data2);

  };

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
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1 w-full max-w-md mt-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8">Login to Your Account</h1>

        {/* Form */}
        <form className="w-full flex flex-col gap-6" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-900"
          >
            LOGIN
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-gray-600">
          Don&apost have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            REGISTER HERE
          </a>
        </p>
      </main>
    </div>
  );
}
