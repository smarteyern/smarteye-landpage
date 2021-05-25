import React from 'react';
import { FaLaptop, FaKey, FaParking, FaUser } from 'react-icons/fa';

import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import { GridRoot } from 'components/atoms/Grid/style';
import Feature from 'components/atoms/Features/Feature';
import Hero from 'components/molecules/Hero/Hero';
import Footer from 'components/organisms/Footer/Footer';
import Section from 'components/molecules/Section/Section';
import ProductGrid from 'components/organisms/ProductGrid/ProductGrid';
import Accordion from 'components/atoms/Accordion/Accordion';
import AccordionGroup from 'components/atoms/Accordion/AccordionGroup';

import headerCovidImage from 'assets/images/hero_banner02.jpg';
import productImage from 'assets/images/card03.jpg';
import Logo from 'assets/images/logo_light.png';
import videoProject from 'assets/videos/smarteye_02.mp4';
import Header from 'components/atoms/Header/Header';
import { Container, ListIcon } from './style';

const products = [
  {
    id: 1,
    title: 'A plataforma SmartEye',
    summary:
      'A plataforma SmartEye é um software web acoplado a um conjunto de sensores ligados a Cidades Inteligentes que captura a quantidade de pessoas em determinados locais.',
    image: productImage,
  },
  {
    id: 2,
    title: 'Monitoramento e Recursos ',
    summary:
      'Atualmente o SmartEye pode contar com dados de câmeras, sensores infra-vermelhos, sinais de celular e redes de internet para contar pessoas.',
    image: productImage,
  },
  {
    id: 3,
    title: 'Visualização em tempo real',
    summary:
      'Visualização em tempo real da quantidade de pessoas Média de pessoas por hora durante o dia',
    image: productImage,
  },
  {
    id: 4,
    title: 'Title 4',
    summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    image: productImage,
  },
  {
    id: 5,
    title: 'Title 5',
    summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    image: productImage,
  },
];

const Home = () => (
  <>
    <Header image={Logo}></Header>
    <Hero image={headerCovidImage}>
      <Heading>
        <h1>
          Smarteye Controle de Aglomerações <strong>Inteligente </strong> <br />
        </h1>
      </Heading>
      <ul>
        <li>Controle de aglomerações em ambientes da unidade de saúde;</li>
        <li>Monitoramento em tempo real distanciamento e fluxo de pessoas;</li>
        <li>Sistema de gestão ativos e controle de recursos;</li>
      </ul>
      <Button color="primary" variant="outlined">
        Saber mais
      </Button>
    </Hero>

    <Section>
      <Heading>
        <h2>Contexto</h2>
      </Heading>
      <GridRoot sm={2} md={4}>
        <Feature icon={<FaUser />} title="Controle espaços">
          <p>
            Em meio à pandemia de COVID-19, evitar aglomerações é a melhor
            maneira de prevenção.
          </p>
        </Feature>
        <Feature icon={<FaParking />} title="Plataforma RT">
          <p>
            Tecnologias de Cidades Inteligentes são úteis dentro e fora de
            crises como essa.
          </p>
        </Feature>
        <Feature icon={<FaLaptop />} title="Gestão Inteligente">
          <p>
            {' '}
            Uso de tecnologias de cidades inteligentes voltado para tomada de
            decisão em mobilidade urbana pode transformar esse cenário.
          </p>
        </Feature>
        <Feature icon={<FaKey />} title="Acessibilidade">
          <p>
            Acesso fácil, rápido com segurança, confiabilidade e integridade.
          </p>
        </Feature>
      </GridRoot>
    </Section>

    <Section inverse>
      <GridRoot md={2}>
        <Container>
          <Heading>
            <h2>Proposta do Projeto</h2>
          </Heading>
          <p>
            O SmartEye é uma solução integrada de hardware e software para a
            identificação de aglomerações e gerenciamento de recursos médicos
            Usando vários tipos de sensores em sistemas embarcados que alimentam
            nossa IA e as Dashboards visíveis para os gestores de saúde.
          </p>
          <Container>
            <Button color="primary">SAIBA MAIS</Button>
          </Container>
        </Container>
        <Container>
          <video
            src={videoProject}
            width="100%"
            type="video/mp4"
            autoPlay
            loop
            muted
          />
        </Container>
      </GridRoot>
    </Section>

    <Section>
      <GridRoot>
        <Container>
          <Heading>
            <h2>Problematica</h2>
          </Heading>
          <ListIcon>
            <ul>
              <li>
                Pandemia sem vacina com aglomerações sendo a principal forma de
                propagar o vírus.
              </li>
              <li>
                Centros comerciais, hospitais/unidades de saúde, instituições
                públicas, entre outros recebem grandes quantidades de pessoas
                possibilitando a disseminação do vírus.
              </li>
              <li>
                Falta de controle e monitoramento efetivo de aglomerações nesses
                locais.
              </li>
            </ul>
          </ListIcon>
          <Container>
            <Button color="primary">SAIBA MAIS</Button>
          </Container>
        </Container>
      </GridRoot>
    </Section>

    <Section inverse>
      <Heading>
        <h2>Solução</h2>
        <ProductGrid products={products} />
      </Heading>
    </Section>

    <Section>
      <GridRoot md={2}>
        <Container>
          <Heading>
            <h2>Proposta de valor</h2>
          </Heading>
          <p>
            A plataforma permite visualizar a quantidade de pessoas em tempo
            real nos locais que mais se concentram pessoas e assim facilitar a
            tomada de decisão dos gestores desses locais a fim de conter
            aglomerações e dificultar a disseminação do COVID-19.
          </p>
          <Container>
            <Button color="primary">SAIBA MAIS</Button>
          </Container>
        </Container>
        <Container>
          <video
            src={videoProject}
            width="100%"
            type="video/mp4"
            autoPlay
            loop
            muted
          />
        </Container>
      </GridRoot>
    </Section>

    <Section inverse>
      <GridRoot>
        <Container>
          <Heading>
            <h2>Diferencial e inovação</h2>
          </Heading>
          <ListIcon>
            <ul>
              <li>
                A plataforma SmartEye usa tecnologias de Cidades Inteligentes
                para captação da quantidade de pessoas.
              </li>
              <li>
                Inteligência Artificial para otimização dos recursos
                hospitalares.
              </li>
              <li>
                Solução de baixo custo comparado ao mercado, visto que câmeras
                que contam pessoas custam muito dinheiro e a proposta do
                SmartEye é utilizar câmeras convencionais e dados de outros
                sensores.
              </li>
            </ul>
          </ListIcon>
          <Container>
            <Button color="primary">SAIBA MAIS</Button>
          </Container>
        </Container>
      </GridRoot>
    </Section>

    <Section>
      <Heading>
        <h2>Dúvidas Frequentes</h2>
      </Heading>

      <AccordionGroup>
        <Accordion title="O que é o SmartEye?">
          Serviço de sensoriamento para prover relatórios e sugestões
          inteligentes de acordo com o contexto no qual está inserido.
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
