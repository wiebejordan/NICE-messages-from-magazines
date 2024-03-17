import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../Pages/App";
import { magazinesToMessage } from "../utils/magazinesToMessage";

test("Renders the main page", async () => {
  const { findByTestId } = render(<App />);
  const text = await findByTestId("title-text");
  expect(text).toBeInTheDocument();
});

describe("magazine to message function works", () => {
  test("It makes sure all characters are present", () => {
    const result = magazinesToMessage("how old", "hello world");
    expect(result).toBe(true);
  });

  test("checks for spaces and special characters", () => {
    const result = magazinesToMessage("? ! hello", "!?hfg hfdlee rglfdsfdo");
    expect(result).toBe(true);
  });

  test("makes sure fails return as false", () => {
    const result = magazinesToMessage("this should fail", "hello world");
    expect(result).toBe(false);
  });

  test("test the UI workflow", async () => {
    const { findByTestId } = render(<App />);
    const sourceInput = await findByTestId("source-input");
    const messageInput = await findByTestId("message-input");
    const clearButton = await findByTestId("clear-button");
    const testButton = await findByTestId("test-button");
    const resultText = await findByTestId("result-text");

    await userEvent.type(sourceInput, "hello world");
    expect(sourceInput).toHaveValue("hello world");
    expect(testButton).toBeDisabled();

    await userEvent.type(messageInput, "how old");
    expect(messageInput).toHaveValue("how old");
    expect(testButton).toBeEnabled();

    await userEvent.click(testButton);
    expect(resultText).toHaveTextContent("Success!");

    await userEvent.click(clearButton);
    expect(sourceInput).toHaveValue("");
    expect(messageInput).toHaveValue("");
  });
});
