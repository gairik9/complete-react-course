import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  const handleClick = async () => {
    const response = await fetch(`https://api.adviceslip.com/advice`);
    const data = await response.json();
    setAdvice(data.slip);
    setCount((count) => count + 1);
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <main className="app">
      <section className="app-container">
        <div className="text-container">
          {advice.advice || "Click To Get An Advice"}
        </div>
        <button type="button" onClick={handleClick}>
          New
        </button>
        <p>You have read {count} advices.</p>
      </section>
    </main>
  );
};

export default App;
