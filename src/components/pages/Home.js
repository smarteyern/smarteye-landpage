import React from "react";
import { FaLaptop, FaKey, FaParking, FaUser } from "react-icons/fa";

import Button from "components/atoms/Button/Button";
import Heading from "components/atoms/Heading/Heading";
import { GridRoot } from "components/atoms/Grid/style";
import Feature from "components/atoms/Features/Feature";
import Hero from "components/molecules/Hero/Hero";
import Footer from "components/organisms/Footer/Footer";
import Section from "components/molecules/Section/Section";

import headerCovidImage from "assets/images/hero_banner02.jpg";
import videoAbout from "assets/videos/smarteye_01.mp4";
import videoProject from "assets/videos/smarteye_02.mp4";
import videoFQ from "assets/videos/smarteye_03.mp4";

const Home = () => (
  <>
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
          <video src={videoAbout} width="100%" type="video/mp4" autoPlay loop />
        </div>
      </GridRoot>
    </Section>

    <Section>
      <GridRoot md={2}>
        <div>
          <Heading>
            <h2>Nossos Serviços</h2>
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
          />
        </div>
      </GridRoot>
    </Section>

    <Section inverse>
      <GridRoot md={2}>
        <div>
          <Heading>
            <h2>Dúvidas Frequentes</h2>
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
          <video src={videoFQ} width="100%" type="video/mp4" autoPlay loop />
        </div>
      </GridRoot>
    </Section>

    <Footer />
  </>
);

export default Home;
