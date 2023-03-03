import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../components/Counter";

describe("Counter", () => {
  test("deve aumentar em 3 o contador quando o botao de incremento for clicado 3 vezes", async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const button = screen.getByRole("button", {
      name: /\+/i,
    });
    const item = screen.getByText(/0/i);
    await user.click(button);
    await user.click(button);
    await user.click(button);
    expect(item).toBeInTheDocument("3");
  });
});
