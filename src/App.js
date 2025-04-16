// App.js

import React, { useState } from "react";
import { brainrotify } from "./components/brainrotify";

function App() {
  const [input, setInput] = useState("");
  const [intensity, setIntensity] = useState(1);
  const [output, setOutput] = useState("");

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>bat text turntifier  🦇</h1>
      <textarea
        rows={4}
        style={{ width: "100%" }}
        placeholder="Type your message..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <div>
        <label>
          Turntness: {intensity}
          <input
            type="range"
            min={1}
            max={3}
            value={intensity}
            onChange={e => setIntensity(Number(e.target.value))}
          />
        </label>
      </div>
      <button
        onClick={() => setOutput(brainrotify(input, intensity))}
        style={{ marginTop: 12, padding: "8px 16px" }}
      >
        Turntify!
      </button>
      {output && (
        <div style={{ marginTop: 24, padding: 16, background: "#f0f0f0", borderRadius: 8 }}>
          <strong>Result:</strong>
          <div style={{ marginTop: 8, fontSize: "1.2rem" }}>{output}</div>
        </div>
      )}
    </div>
  );
}

export default App;
