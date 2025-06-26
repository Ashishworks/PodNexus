import React, { useState, useEffect } from "react";

const PodcastEpisodes = ({ feedUrl }) => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      setEpisodes(data.items || []);
      setLoading(false);
    };
    fetchEpisodes();
  }, [feedUrl]);

  if (loading) return <div>Loading episodes…</div>;

  return (
    <div>
      <h2>Episodes</h2>
      {episodes.length === 0 && <div>No playable episodes found</div>}
      {episodes.map((episode, index) => (
        <div key={index} className="mb-4 p-2 border rounded">
          <h3>{episode.title}</h3>
          <audio controls src={episode.enclosure?.link}>
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}
    </div>
  );
};

export default PodcastEpisodes;
