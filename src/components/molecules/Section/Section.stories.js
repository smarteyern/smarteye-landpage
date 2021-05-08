import Heading from "components/atoms/Heading/Heading";
import React from "react";

import Section from "./Section";

export default {
  title: "Components/Molecules/Section",
  component: Section,
};

export const usage = () => (
  <Section inverse>
    <Heading>
      <h1>Título</h1>
    </Heading>
  </Section>
);
