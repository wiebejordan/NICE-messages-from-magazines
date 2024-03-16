import { useState } from "react";
import "./styles/App.scss";

type SourceObject = {
  [key: string]: number;
};

function App() {
  const [message, setMessage] = useState("");
  const [msgSource, setMsgSource] = useState("");
  const [testResult, setTestResult] = useState<boolean | null>(null);

  const testSource = () => {
    const sourceToCharacters: SourceObject = {};
    const msgToCharacters: SourceObject = {};
    let result = true;

    for (const character of msgSource) {
      sourceToCharacters[character] = sourceToCharacters[character] + 1 || 1;
    }

    for (const char of message) {
      msgToCharacters[char] = msgToCharacters[char] + 1 || 1;
    }

    for (const [key] of Object.entries(msgToCharacters)) {
      if (
        sourceToCharacters[key] < msgToCharacters[key] ||
        !sourceToCharacters[key]
      ) {
        result = false;
      }
    }
    setTestResult(result);
  };

  return (
    <>
      <div className="container">
        <div className="inputs-container">
          <div className="input-label">
            <label>Source</label>
            <input
              value={msgSource}
              onChange={(e) => {
                setMsgSource(e.target.value);
                setTestResult(null);
              }}
              placeholder="enter source"
            />
          </div>

          <div className="input-label">
            <label>Message</label>
            <input
              value={message}
              name=""
              onChange={(e) => {
                setMessage(e.target.value);
                setTestResult(null);
              }}
              placeholder="enter message"
            />
          </div>
        </div>

        <div className="button-container">
          <button
            className="test-button"
            disabled={!message || !msgSource}
            onClick={() => testSource()}
          >
            Test
          </button>
          <button
            className="clear-button"
            disabled={testResult === null}
            onClick={() => {
              setMessage("");
              setMsgSource("");
              setTestResult(null);
            }}
          >
            clear results
          </button>
        </div>

        <div className="results-container">
          <p>
            Test Results: {testResult && message && msgSource && "Success!"}
            {testResult === false && message && msgSource && "Fail"}
            {testResult === null && " "}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
