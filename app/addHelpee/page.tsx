"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation'
import { AddHelp } from "../scripts/buddycallers";

export default function IdInputPage() {
    const router = useRouter();
  const [id, setId] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
        const response = await AddHelp(id);
        console.log(response);
  
        if (response.ok) {
          const data = await response.json();
          console.log("Help adding successful:", data);
          router.push("/helper");
        } else {
          const errorData = await response.json();
          console.error("Help adding failed:", errorData.message);
          router.push("/addHelpee");
          // Handle login error (e.g., show error message to user)
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Enter Your ID</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white shadow-md rounded-lg p-6"
      >
        <label htmlFor="idInput" className="block text-gray-700 font-medium mb-2">
          ID:
        </label>
        <input
          type="text"
          id="idInput"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter the Helpee ID"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
        <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-900"
          >
            GET STARTED
          </button>
      </form>
    </div>
  );
}