import Image from "next/image";

export default function Home() {
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
        <h1 className="text-3xl font-semibold">It is pretty empty here...</h1>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Person's code"
          className="px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-64"
        />

        {/* Button */}
        <button className="px-7 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Add someone
        </button>
      </main>
    </div>
  );
}
