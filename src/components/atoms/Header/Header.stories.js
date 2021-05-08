import React from "react";
import { text } from "@storybook/addon-knobs";

import Header from "./Header";
import Logo from "assets/images/logo_light.png";
import Hero from "components/molecules/Hero/Hero";

import banner from "assets/images/hero_banner02.jpg";

export default {
  title: "Components/Atoms/Header",
  component: Header,
};

export const usage = () => <Header image={Logo}></Header>;

export const withHero = () => (
  <>
    <Header image={Logo}></Header>
    <Hero image={banner}>
      <h1>
        {text("Title", "Plataforma de Gestão de UBS e Áreas Hospitalares")}
      </h1>
      <p>
        {text(
          "Descrition",
          "O Smartye provê gestão em tempo real no ambiente de UBSs e Hospitais"
        )}
      </p>
    </Hero>
  </>
);
