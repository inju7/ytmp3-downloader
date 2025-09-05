import React, { useState } from "react";

const API_URL = "http://localhost:5000"; // Adjust if backend runs on a different port

export default function YoutubeDownloader() {
  const [url, setUrl] = useState("");
  const [filename, setFilename] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setFilename("");
    try {
      const response = await fetch(`${API_URL}/download`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      if (response.ok) {
        setFilename(data.filename);
      } else {
        setError(data.error || "Download failed");
      }
    } catch (err) {
      setError("Network error");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">YouTube to MP3 Downloader</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          className="w-full border p-2 rounded"
          placeholder="Enter YouTube URL"
          value={url}
          onChange={e => setUrl(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Processing..." : "Download MP3"}
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {filename && (
        <a
          href={`${API_URL}/file/${filename}`}
          className="block mt-4 text-green-600 underline"
          download
        >
          Download MP3
        </a>
      )}
    </div>
  );
}
