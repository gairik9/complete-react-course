import { useState } from "react";
import "./App.css";

const App = () => {
  const [advice, setAdvice] = useState("");

  const handleClick = async () => {
    const response = await fetch(`https://api.adviceslip.com/advice`);
    const data = await response.json();
    console.log(data.slip);
    setAdvice(data.slip);
  };

  return (
    <main className="app">
      <section className="app-container">
        <div className="text-container">
          {advice.advice || "Click To Get An Advice"}
        </div>
        <button type="button" onClick={handleClick}>
          New
        </button>
      </section>
    </main>
  );
};

export default App;
