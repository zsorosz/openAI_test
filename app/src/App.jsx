import { useState } from "react";
import "./App.css";

function App() {
  const [tweet, setTweet] = useState("");
  const [sentiment, setSentiment] = useState("");

  function callOpenAIAPI() {
    console.log("Calling the OpenAI API");
  }
  console.log(tweet);
  return (
    <div className="App">
      <div>
        <textarea
          onChange={(e) => setTweet(e.target.value)}
          placeholder="Paste your tweet here!"
          cols={50}
          rows={10}
        />
      </div>
      <div>
        <button onClick={callOpenAIAPI}>
          Get the Tweet sentiment from OpenAI API
        </button>
        {sentiment !== "" ? <h3>This Tweet is: {sentiment}</h3> : null}
      </div>
    </div>
  );
}

export default App;
