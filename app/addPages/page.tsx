"use client";

import Image from "next/image";
import { useState } from "react";
import { addFile } from "../scripts/fileCallers";
import { processPDF } from "../scripts/MLcallers_ocr";

export default function Home() {
  // State and messages object moved inside the component
  const [selectedNotebook, setSelectedNotebook] = useState<"notebook1" | "notebook2" | "notebook3">("notebook1");
  const [resultText, setResultText] = useState([]);

  const messages: { [key in "notebook1" | "notebook2" | "notebook3"]: string } = {
    notebook1: "Notebook 1: A cell is the fundamental unit of life.",
    notebook2: "Notebook 2: Prokaryotic cells are the most basic form of life.",
    notebook3: "Notebook 3: A cell is the fundamental unit of life. There are hundreds of millions of distinct types of live cells can be found. A multicellular organism is made up of these cells, whereas a unicellular organism is made up of a single cell. Each cell is distinct, with its own set of functions and characteristics. Unicellular organisms, the most common type of organism, are made up of prokaryotic cells. Every bacteria has a prokaryotic cell with basic components. Eukaryotes, on the other hand, are a more evolved type of cell that makes up multicellular organisms, while just a few unicellular species have complex parts. They evolved from prokaryotic cells, as there are numerous similarities between prokaryotic and eukaryotic cells. Every cell inside our body is surrounded by a cell membrane (Plasma). The cell membrane divides the material outside the cell, known as extracellular material, from the stuff inside the cell, known as intracellular material. It protects a cell’s integrity and regulates the transport of materials into and out of the cell. For the necessary exchange, all materials inside a cell must have accessibility to the cell membrane (the cell’s boundary). The cell wall is the most exterior layer of a plant cell. It is formed of cellulose and serves as mechanical support for the cell. It covers the cell membrane and helps keep the pressure within the cell constant. The nucleus, which is created by a nuclear membrane encircling a fluid nucleoplasm, is the cell’s control center. Deoxyribonucleic acid (DNA), the cell’s genetic material, is undoubtly found in the chromatin threads present inside the nucleus. The nucleolus is a concentrated area of ribonucleic acid (RNA) in the nucleus where ribosomes are formed. The nucleus dictates how a cell will function as well as its basic. The centrosome is a component of an animal cell. A cell in an animal may have one or two centrosomes that aid in mitosis. Chloroplasts are plant cell components that are green in hue. They assist in the creation of food in the presence of sunlight through photosynthesis. The cytoplasm is the gel-like fluid that fills the inside of a particular cell. It serves as a medium for chemical reactions. It works as a platform for other organelles to function within the cell. The cytoplasm of a cell is where all of the functions for cell proliferation, growth, and replication take place. Materials migrate within the cytoplasm via diffusion, a physical mechanism that can only travel short distances. The endoplasmic reticulum refers to the tubular structures found surrounding the nucleus that assist both plant and animal cells. Endoplasmic reticulum is classified into two types: smooth reticulum without associated ribosomes and rough endoplasmic reticulum with attached ribosomes. The golgi apparatus or bodies are flat vesicular structures layered one on top of the other. They release and store hormones and enzymes that aid in cell transport. The mitochondrial membrane is composed of two layers, the inner of which is folded to generate cristae. It is the cell’s powerhouse, where ATP is produced by cellular respiration. Ribosomes are the component of a cell that holds RNA and aids in protein synthesis. A vacuole is a big and plentiful vesicle found in plant cells. It holds fluids and aids in the storage of substances, construction materials, and water. A plant and animal cell are distinguished by their cell walls, central vacuoles, and chloroplasts. The smallest unit of life is, in fact, the most crucial for life’s sustenance! Cell structure theories have evolved significantly over time. Cells were once thought to be simple membrane sacs containing fluid with a few floating particles, according to early biologists. Cells are vastly more intricate than this, according to today’s biologists. Cells in the body come in a variety of sizes, shapes, and types. It incorporates characteristics from all cell types. A cell is made up of three parts: the cell membrane, the nucleus, and the cytoplasm that lies between the two. Within the cytoplasm, there are complicated arrangements of fine fibres as well as hundreds or even thousands of tiny yet unique structures known as organelles. '''  # Truncated for brevity",
  };

  function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const handleFileUpload = async () => {
    console.log("merge");
    await sleep(10000);
    const fileInput = document.getElementById("file-upload") as HTMLInputElement;

    console.log(fileInput);
    // Check if a file is selected
    if (fileInput?.files && fileInput.files.length > 0) {
      console.log("dada");
        const file = fileInput.files[0]; // Retrieve the first selected file
        console.log(file);
        const helpeeId = "helpee_acc_id";

        try {
            // Call the addFile function with the selected file and HelpeeId
            const result = await addFile(file, helpeeId);
            console.log("File Uploaded Successfully:", result);

            const OCRresult = await processPDF(file);
            setResultText(OCRresult);
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    } else {
        console.error("No file selected!");
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800">
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
          <a href="#">
            <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Add someone
            </button>
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center text-center mt-20 space-y-6">
        <h1 className="text-3xl font-semibold">Select a notebook:</h1>

        {/* Dropdown */}
        <div>
          <select
            className="border border-black"
            value={selectedNotebook}
            onChange={(e) => setSelectedNotebook(e.target.value as "notebook1" | "notebook2" | "notebook3")}
          >
            <option value="notebook1">Notebook 1</option>
            <option value="notebook2">Notebook 2</option>
            <option value="notebook3">Notebook 3</option>
          </select>

          <div className="max-w-md text-justify overflow-hidden text-ellipsis line-clamp-6 mt-4">
            {messages[selectedNotebook]}
          </div>
        </div>

        {/* File Upload */}
        <div className="mt-6">
          <label
            htmlFor="file-upload"
            className="cursor-pointer px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={() => handleFileUpload()}
          >
            Add document
          </label>
          
        </div>

        {/* Button */}
        <button 
          className="px-7 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Upload File
        </button>
        <input id="file-upload" type="file" className="hidden" />
        {resultText && (
            <p>
                {resultText}
            </p>
        )}
      </main>
    </div>
  );
}
