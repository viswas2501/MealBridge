import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/health") // This calls `http://localhost:8080/api/health`
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h1>Meal Bridge Frontend</h1>
      <p>Backend Response: {message}</p>
    </div>
  );
}

export default App;
