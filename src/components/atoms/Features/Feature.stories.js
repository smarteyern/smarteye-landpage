import React from "react";
import { FaLaptop, FaKey, FaParking, FaUser } from "react-icons/fa";
import { GridRoot } from "components/atoms/Grid/style";
import Feature from "./Feature";

export default {
  title: "Components/Atoms/Feature",
  component: Feature,
};

export const usage = () => (
  <Feature icon={<FaLaptop />} title="Teste">
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
  </Feature>
);

export const withGrid = () => (
  <GridRoot sm={2} md={4}>
    <Feature icon={<FaUser />} title="Controle espaços">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </Feature>
    <Feature icon={<FaParking />} title="Plataforma RT">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </Feature>
    <Feature icon={<FaLaptop />} title="Gestão Inteligente">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </Feature>
    <Feature icon={<FaKey />} title="Acessibilidade">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </Feature>
  </GridRoot>
);
