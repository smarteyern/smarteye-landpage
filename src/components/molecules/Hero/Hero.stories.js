import React from "react";
import { text } from "@storybook/addon-knobs";

//adicionando os estilos para poder gerenciar os styles
import Hero from "components/molecules/Hero/Hero";
import Button from "components/atoms/Button/Button";
import Heading from "components/atoms/Heading/Heading";

import headerCovidImage from "stories/assets/images/covid-isolation.jpg";
import headerWomanImage from "stories/assets/images/mask-woman.jpg";

export default {
  title: "Components/Molecules/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={headerCovidImage}>
    <h1>{text("Title", "Plataforma de Gestão de UBS e Áreas Hospitalares")}</h1>
    <p>
      {text(
        "Descrition",
        "O Smartye provê gestão em tempo real no ambiente de UBSs e Hospitais"
      )}
    </p>
  </Hero>
);

export const ListContent = () => (
  <Hero image={headerWomanImage}>
    <Heading>
      <h1>
        Plataforma de <strong>Gestão Inteligente</strong> <br />
        de Áreas Hospitalares
      </h1>
    </Heading>
    <ul>
      <li>Controle de aglomerações em ambientes da unidade de saúde;</li>
      <li>Monitoramento em tempo real distanciamento e fluxo de pessoas;</li>
      <li>Sistema de gestão ativos e controle de recursos;</li>
    </ul>
    <Button color="primary" variant="outlined">
      Saber mais...
    </Button>
  </Hero>
);
