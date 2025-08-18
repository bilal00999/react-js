import { useState } from "react";
import { quotes } from "./quotes";

function App() {
  const [topic, setTopic] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const matchedQuotes = quotes
      .filter((q) => q.topic.toLowerCase() === topic.toLowerCase())
      .slice(0, 3);
    setResults(matchedQuotes);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6"
      class="main-div"
    >
      <h1 className="text-3xl font-bold mb-6">Quote Generator</h1>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          className="border border-gray-300 p-2 rounded"
          type="text"
          placeholder="Enter topic e.g. motivation"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          type="submit"
        >
          Get Quotes
        </button>
      </form>

      <div className="space-y-4 max-w-md text-center">
        {results.length > 0 ? (
          results.map((q, index) => (
            <p key={index} className="p-4 bg-white rounded shadow">
              "{q.text}"
            </p>
          ))
        ) : (
          <p className="text-gray-500">
            No quotes to show. Try a topic like "motivation" or "life".
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
