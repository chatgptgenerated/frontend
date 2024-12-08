"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AddHelp, getAllHelped as Import } from "../scripts/buddycallers"; // Assume FetchHelperList fetches the list
import Image from "next/image";

export default function IdInputPage() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [helperList, setHelperList] = useState([]);

  useEffect(() => {
    // Fetch the list of people the user is helping
    const fetchHelpers = async () => {
      try {
        const response = await Import();
        console.log(response);
        const data = await response;
        console.log(data);
        setHelperList(data);
      } catch (error) {
        console.error("An error occurred while fetching the helper list:", error);
      }
    };

    fetchHelpers();
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
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
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-gray-800">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-8 py-4 fixed top-0 left-0 bg-white shadow-md">
        <div className="h-14 w-14">
          <Image src="/logo1.svg" alt="App logo" width={100} height={100} />
        </div>
        <nav className="flex gap-10 text-lg">
          <a href="/addPages" className="hover:underline mt-2">
            Add Pages 
          </a>
          <a href="/addHelpee" className="hover:underline mt-2">
            Add Helpee
          </a>
          <a href="/helpee" className="hover:underline mt-2">
            Helpee
          </a>
          <a href="/learnPage" className="hover:underline mt-2">
            Learning Page
          </a>
          <a href="/login"  className="hover:underline mt-2">
            <button>
              Login
            </button>
          </a>
          <a href="/register"  className="hover:underline mt-2">
            <button>
              Register
            </button>
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-start text-center mt-32 w-full max-w-lg space-y-8 px-4">
        {/* Input Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <h1 className="text-2xl font-semibold">Add Someone</h1>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Person's code"
            className="px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
          />
          <button
            type="submit"
            className="px-7 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 w-full"
          >
            Add
          </button>
        </form>

        {/* List of People */}
        <div className="w-full">
          <h2 className="text-2xl font-semibold">People You Are Helping</h2>
          {helperList.length > 0 ? (
            <ul className="space-y-2 mt-4">
              {helperList.map(x => (
                <li
                  className="px-4 py-2 border border-gray-300 rounded-lg"
                >
                  {x.fullName}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 mt-4">You are not helping anyone yet.</p>
          )}
        </div>
      </main>
    </div>
  );
}
