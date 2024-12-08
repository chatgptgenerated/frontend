"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FetchHelpeeSubjects } from "../scripts/buddycallers"; // Assume this fetches the list of subjects
import Image from "next/image";

export default function HelpeeSubjectsPage() {
  const router = useRouter();
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    // Fetch the list of subjects for the helpee
    const fetchSubjects = async () => {
      try {
        const response = await FetchHelpeeSubjects();
        if (response.ok) {
          const data = await response.json();
          setSubjects(data);
        } else {
          console.error("Failed to fetch subjects");
        }
      } catch (error) {
        console.error("An error occurred while fetching subjects:", error);
      }
    };

    fetchSubjects();
  }, []);

  // Add placeholder subjects if none are fetched
  const subjectsToDisplay = subjects.length > 0 ? subjects : [
    { name: "Biology" },
    { name: "History" },
    { name: "Geography" },
  ];

  const handleSubjectClick = (subject) => {
    router.push(`/helpee/${subject.name}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-gray-800">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-8 py-4 fixed top-0 left-0 bg-white shadow-md">
        <div className="h-14 w-14">
          <Image src="/logo1.svg" alt="App logo" width={100} height={100} />
        </div>
        <nav className="flex gap-8 text-lg">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Our mission
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-start text-center mt-32 w-full max-w-4xl space-y-8 px-4">
        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {subjectsToDisplay.map((subject, index) => (
            <div
              key={index}
              className="px-4 py-6 border border-gray-300 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => handleSubjectClick(subject)}
            >
              <p className="text-lg font-medium">{subject.name}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
