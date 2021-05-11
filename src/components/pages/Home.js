import React from "react";
import { FaLaptop, FaKey, FaParking, FaUser } from "react-icons/fa";

import Button from "components/atoms/Button/Button";
import Heading from "components/atoms/Heading/Heading";
import { GridRoot } from "components/atoms/Grid/style";
import Feature from "components/atoms/Features/Feature";
import Hero from "components/molecules/Hero/Hero";
import Footer from "components/organisms/Footer/Footer";
import Section from "components/molecules/Section/Section";
import ProductGrid from "components/organisms/ProductGrid/ProductGrid";
import Accordion from "components/atoms/Accordion/Accordion";
import AccordionGroup from "components/atoms/Accordion/AccordionGroup";

import headerCovidImage from "assets/images/hero_banner02.jpg";
import productImage from "assets/images/card03.jpg";
import Logo from "assets/images/logo_light.png";
import videoProject from "assets/videos/smarteye_02.mp4";
import Header from "components/atoms/Header/Header";

const products = [
  {
    id: 1,
    title: "Title 1",
    summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    image: productImage,
  },
  {
    id: 2,
    title: "Title 2",
    summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    image: productImage,
  },
  {
    id: 3,
    title: "Title 3",
    summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    image: productImage,
  },
  {
    id: 4,
    title: "Title 4",
    summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    image: productImage,
  },
  {
    id: 5,
    title: "Title 5",
    summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    image: productImage,
  },
];

const Home = () => (
  <>
    <Header image={Logo}></Header>
    <Hero image={headerCovidImage}>
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

    <Section>
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
    </Section>

    <Section inverse>
      <GridRoot md={2}>
        <div>
          <Heading>
            <h2>Projeto SmartEye</h2>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci,
            molestias qui! Magni voluptas assumenda reprehenderit animi vitae
            quia! Quidem, veritatis saepe eveniet temporibus animi architecto
            odit laborum doloribus ullam cupiditate?
          </p>
          <div>
            <Button color="primary">SAIBA MAIS</Button>
          </div>
        </div>
        <div>
          <video
            src={videoProject}
            width="100%"
            type="video/mp4"
            autoPlay
            loop
            muted
          />
        </div>
      </GridRoot>
    </Section>

    <Section>
      <Heading>
        <h2>Nossos Serviços</h2>
        <ProductGrid products={products} />
      </Heading>
    </Section>

    <Section inverse>
      <Heading>
        <h2>Dúvidas Frequentes</h2>
      </Heading>

      <AccordionGroup>
        <Accordion title="Como funciona o projeto SmartEye?">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
          voluptatibus enim et quaerat minima blanditiis.
        </Accordion>

        <Accordion title="Como recuperar senha ou acesso bloqueado?">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
          voluptatibus enim et quaerat minima blanditiis.
        </Accordion>

        <Accordion title="Como solicito acesso a plataforma SmartEye?">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
          voluptatibus enim et quaerat minima blanditiis.
        </Accordion>
      </AccordionGroup>
    </Section>
    <Footer />
  </>
);

export default Home;
