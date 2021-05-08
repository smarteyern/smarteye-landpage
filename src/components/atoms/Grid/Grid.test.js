import React from "react";
import { render } from "test-utils";

import Grid from "./Grid";

test("Match snapshot with no params", () => {
  const { asFragment } = render(<Grid></Grid>);

  expect(asFragment()).toMatchSnapshot();
});

test("Match snapshot with params", () => {
  const { asFragment } = render(<Grid sm={2} md={3} lg={4} xl={5}></Grid>);

  expect(asFragment()).toMatchSnapshot();
});

test("Match snapshot with params sm", () => {
  const { asFragment } = render(<Grid sm={1}></Grid>);

  expect(asFragment()).toMatchSnapshot();
});

test("Match snapshot with params md", () => {
  const { asFragment } = render(<Grid md={4}></Grid>);

  expect(asFragment()).toMatchSnapshot();
});

test("Match snapshot with params lg", () => {
  const { asFragment } = render(<Grid lg={8}></Grid>);

  expect(asFragment()).toMatchSnapshot();
});

test("Match snapshot with params xl", () => {
  const { asFragment } = render(<Grid xl={10}></Grid>);

  expect(asFragment()).toMatchSnapshot();
});
