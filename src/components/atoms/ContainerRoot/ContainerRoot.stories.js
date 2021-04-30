import React from "react";
import Heading from "../Heading/Heading";

import ContainerRoot from "./ContainerRoot";

export default {
  title: "Components/Atoms/ContainerRoot",
  component: ContainerRoot,
};

export const usage = () => (
  <ContainerRoot>
    <Heading>
      <h1>
        Plataforma de <strong>Gestão Inteligente</strong> <br />
        de Áreas Hospitalares
      </h1>
    </Heading>
  </ContainerRoot>
);
