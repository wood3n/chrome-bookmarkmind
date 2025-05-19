import GithubIcon from "./assets/github.svg?react";

import "./app.css";

function App() {
  return (
    <div className="flex flex-col h-96 w-96 items-center justify-center p-12">
      <h1 className="text-xl font-bold">
        Rsbuild-Tailwind
      </h1>
      <h1 className="text-xl font-bold">
        Chrome extension boilerplate
      </h1>
      <div className="mt-4">
        <button
          type="button"
          className="flex items-center space-x-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer"
          onClick={() => {
            window.open("https://github.com/wood3n/rsbuild-tailwind-chrome-extension-boilerplate");
          }}
        >
          <GithubIcon style={{ width: 24, height: 24 }} />
          <p>Give me a star</p>
        </button>
      </div>
    </div>
  );
}

export default App;
