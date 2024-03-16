import { useState } from "react";
import "../styles/App.scss";

type SourceObject = {
  [key: string]: number;
};

const App = () => {
  const [message, setMessage] = useState("");
  const [msgSource, setMsgSource] = useState("");
  const [testResult, setTestResult] = useState<boolean | null>(null);

  const testSource = () => {
    const sourceToCharacters: SourceObject = {};
    const msgToCharacters: SourceObject = {};
    let result = true;

    for (const character of msgSource) {
      const formatCharacter = character.toLowerCase();
      sourceToCharacters[formatCharacter] =
        sourceToCharacters[formatCharacter] + 1 || 1;
    }

    for (const char of message) {
      const formatChar = char.toLowerCase();
      msgToCharacters[formatChar] = msgToCharacters[formatChar] + 1 || 1;
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
            className="clear-button"
            disabled={testResult === null && !message && !msgSource}
            onClick={() => {
              setMessage("");
              setMsgSource("");
              setTestResult(null);
            }}
          >
            {testResult !== null ? "reset" : "clear"}
          </button>
          <button
            className="test-button"
            disabled={!message || !msgSource}
            onClick={() => testSource()}
          >
            Test
          </button>
        </div>

        <div className="results-container">
          <p>
            Test Results:{" "}
            {testResult && message && msgSource && <b>"Success!"</b>}
            {testResult === false && message && msgSource && "Fail"}
            {testResult === null && " "}
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
