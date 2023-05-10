import "./App.css";

function App() {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-purple-500 to-blue-500">
      <div className="absolute top-0 left-0 mt-4 ml-20">
        <input
          type="text"
          placeholder="Search"
          className="mt-5 ml-4 px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-gray-500"
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold"
        >
          Submit
        </button>
      </div>
      <div className="h-screen w-screen flex justify-center items-center mt-10">
        <div className="w-[90%] h-[90%] flex justify-center items-center bg-pink-300 bg-opacity-20 rounded-lg p-10">
          <div className="w-3/5 h-full border-black border-2 rounded-lg mr-4"></div>
          <div className="w-2/5 h-full border-black border-2 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
