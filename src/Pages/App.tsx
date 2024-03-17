import { useState } from "react";
import Buttons from "../Components/Buttons";
import Inputs from "../Components/Inputs";
import "../styles/App.scss";

const App = () => {
  const [message, setMessage] = useState("");
  const [msgSource, setMsgSource] = useState("");
  const [testResult, setTestResult] = useState<boolean | null>(null);

  return (
    <>
      <h1 data-testid="title-text">Messages from Magazines</h1>
      <div className="container">
        <Inputs
          setMessage={setMessage}
          setMsgSource={setMsgSource}
          setTestResult={setTestResult}
          message={message}
          msgSource={msgSource}
          testResult={testResult}
        />
        <Buttons
          setMessage={setMessage}
          setMsgSource={setMsgSource}
          setTestResult={setTestResult}
          message={message}
          msgSource={msgSource}
          testResult={testResult}
        />
      </div>
    </>
  );
};

export default App;
