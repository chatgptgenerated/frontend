import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-8 sm:p-16 bg-white text-gray-800">
      <header className="w-full flex justify-between items-center p-4 sm:px-8 fixed top-0 left-0 bg-white shadow-md z-10">
        <div className="h-14 w-14">
          <Image
            src="/logo1.svg"
            alt="App logo"
            width={100}
            height={100}
          />
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

      <main className="text-center flex flex-col items-center justify-center flex-1 pt-20">
        <h1 className="text-3xl sm:text-5xl font-bold mb-24">
          Breaking Barriers to Education <br /> For the Visually Impaired
        </h1>
        <div className="flex items-center justify-center gap-4">
          <p className="max-w-lg text-xl text-gray-600 mr-40">
            Our app makes notes accessible for the visually impaired, generates
            concise summaries, features a vocal chatbot, and a community of
            buddies for an inclusive and efficient learning experience.
          </p>
          <Image
            src="/main-illustration.png"
            alt="Illustration of a person using a voice assistant"
            width={320}
            height={320}
            className="mt-4"
          />
        </div>
      </main>
    </div>
  );
}
