type Props = {
  setMsgSource: (msgSrc: string) => void;
  setMessage: (msgSrc: string) => void;
  setTestResult: (result: boolean | null) => void;
  message: string;
  msgSource: string;
  testResult: boolean | null;
};

const Inputs = ({
  setMsgSource,
  setMessage,
  setTestResult,
  message,
  msgSource,
  testResult,
}: Props) => {
  return (
    <div className="inputs-container">
      <div className="input-label">
        <label data-testid="source-label">Source</label>
        <input
          value={msgSource}
          onChange={(e) => {
            setMsgSource(e.target.value);
            setTestResult(null);
          }}
          placeholder="enter source"
          data-testid="source-input"
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
          data-testid="message-input"
        />
      </div>
      <div className="results-container">
        <p data-testid="result-text">
          Test Result: {testResult && message && msgSource && <b>Success!</b>}
          {testResult === false && message && msgSource && "Fail"}
        </p>
      </div>
    </div>
  );
};

export default Inputs;
