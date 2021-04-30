import React from "react";
import { render } from "test-utils";

import Feature from "./Feature";

test("Renders the title", () => {
  const { getByText } = render(<Feature title="My title" />);

  expect(getByText("My title")).toBeInTheDocument();
});

test("Renders the children", () => {
  const { getByText } = render(<Feature>My Children</Feature>);

  expect(getByText("My Children")).toBeInTheDocument();
});
