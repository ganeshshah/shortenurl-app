import React, { useState } from 'react';

function SearchContainer() {
  const [longUrl, setLongUrl] = useState('');
  const [outputUrl, setOutputUrl] = useState('');

  const handleUrlChange = (event) => {
    setLongUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your URL processing logic here
    // For example, you might shorten the URL using a third-party API
    const processedUrl = 'https://example.com/shortened-url'; // Replace with actual processing
    setOutputUrl(processedUrl);
  };

  return (
    <div className="container mx-auto p-24">
      <h1 className="text-2xl font-bold mb-4">Enter your long URL</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={longUrl}
          onChange={handleUrlChange}
          placeholder="Enter a long URL"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-cyan-700 hover:bg-cyan-500 text-white px-4 py-2 rounded mt-4">
          Submit
        </button>
      </form>
      <div className="mt-14">
        <h2 className="text-lg font-bold">Your shortened url:</h2>
        <p className="text-gray-700">{outputUrl}</p>
      </div>
    </div>
  );
}

export default SearchContainer;
