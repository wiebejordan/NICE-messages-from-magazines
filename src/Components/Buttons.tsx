import { magazinesToMessage } from "../utils/magazinesToMessage";

type Props = {
  setMsgSource: (msgSrc: string) => void;
  setMessage: (msgSrc: string) => void;
  setTestResult: (result: boolean | null) => void;

  message: string;
  msgSource: string;
  testResult: boolean | null;
};

const Buttons = ({
  setMsgSource,
  setMessage,
  setTestResult,
  testResult,
  message,
  msgSource,
}: Props) => {
  const onTestClick = () => {
    const result = magazinesToMessage(message, msgSource);
    setTestResult(result);
  };

  return (
    <div className="button-container">
      <button
        className="clear-button"
        disabled={testResult === null && !message && !msgSource}
        onClick={() => {
          setMessage("");
          setMsgSource("");
          setTestResult(null);
        }}
        data-testid="clear-button"
      >
        {testResult !== null ? "reset" : "clear"}
      </button>
      <button
        className="test-button"
        disabled={!message || !msgSource}
        onClick={() => onTestClick()}
        data-testid="test-button"
      >
        Test
      </button>
    </div>
  );
};

export default Buttons;
