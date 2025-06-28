import React, { useEffect, useState } from "react";

function App() {
  const [audioUrl, setAudioUrl] = useState("");

  useEffect(() => {
    fetch("https://listen-api.listennotes.com/api/v2/episodes/44d589b1f41f4346864cbebbb74e32ed", {
      headers: {
        "X-ListenAPI-Key": "107a31b82f2847618bfcc67bb0063263"
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log("Audio URL:", data.audio);
        setAudioUrl(data.audio);
      })
      .catch(err => console.error("Fetch error:", err));
  }, []);

  return (
    <div>
      <h2>Podcast Player</h2>
      {audioUrl ? (
        <audio controls>
          <source src={audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      ) : (
        <p>Loading audio...</p>
      )}
    </div>
  );
}

export default App;
