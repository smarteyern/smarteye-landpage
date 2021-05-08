import React from "react";
import { render, fireEvent } from "test-utils";
import Button from "./Button";
import { ButtonColors, ButtonsVariants } from "./styles";

test("Renders a text", () => {
  const { getByText } = render(<Button>Click Here</Button>);

  expect(getByText("Click Here")).toBeInTheDocument();
});

test("Trigger event on click", () => {
  const handleClick = jest.fn();

  const { getByRole } = render(<Button onClick={handleClick} />);
  fireEvent.click(getByRole("button"));

  expect(handleClick).toBeCalled();
});

test.each(Object.values(ButtonColors).map((item) => [item]))(
  "Renders with color %s",
  (color) => {
    const { asFragment } = render(<Button color={color} />);

    expect(asFragment()).toMatchSnapshot();
  }
);

test.each(Object.values(ButtonsVariants).map((item) => [item]))(
  "Renders with variants %s",
  (variant) => {
    const { asFragment } = render(<Button variant={variant} />);

    expect(asFragment()).toMatchSnapshot();
  }
);

test("Renders with primary and variants %s", () => {
  const { asFragment } = render(<Button variant="outlined" color="primary" />);

  expect(asFragment()).toMatchSnapshot();
});

test("Renders with link and variants %s", () => {
  const { asFragment } = render(<Button variant="link" color="primary" />);

  expect(asFragment()).toMatchSnapshot();
});
