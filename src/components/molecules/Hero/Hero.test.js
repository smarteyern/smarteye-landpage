import React from "react";
import { render } from "test-utils";

import Hero from "./Hero";

test("should Hero with children", () => {
  const component = render(
    <>
      <Hero>
        <p>Claudeilton Dantas</p>
      </Hero>
    </>
  );

  expect(component.getByText("Claudeilton Dantas")).toBeInTheDocument();
});

test("Renders image background", () => {
  const image = "http://test/image.jpg";
  const { getByTestId } = render(<Hero image={image} />);

  expect(getByTestId("hero")).toHaveStyleRule({
    background: image,
  });
});
