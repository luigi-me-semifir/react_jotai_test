import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import Increment from "./components/Increment";
import Form from "./components/Form";
import TestAction from "./components/TestAction";

test("should be true", () => {
  expect(true).toBe(true);
});

test("Mon titre doit contenir premier", () => {
  const { getByText } = render(<App />);
  const titre = getByText(/Mes premier test/i);
  expect(titre).toBeInTheDocument();
});

test("Est ce qu'il a un bouton dans le composant increment", () => {
  const { getByRole } = render(<Increment />);
  const bouton = getByRole("button");
  expect(bouton).toBeInTheDocument();
});

test("Ai-je un input lié a un label", () => {
  const { getByLabelText } = render(<Form />);
  const inputTest = getByLabelText("Test");
  expect(inputTest).toBeInTheDocument();
});

test("Quand je rentre Bernard, j'ai bernard qui apparait", () => {
  const nom = "Bernard";
  const { getByText, getByDisplayValue, getByPlaceholderText, queryByText } =
    render(<TestAction />);
  expect(queryByText(nom)).toBeNull();
  fireEvent.change(getByPlaceholderText(/nom/), { target: { value: nom } });
  expect(getByDisplayValue(nom)).toBeInTheDocument();
  fireEvent.click(getByText(/Soumettre/i));
  expect(getByText(nom)).toBeInTheDocument();
});
