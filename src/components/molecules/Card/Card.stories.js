import React from "react";

import Card from "./Card";
import CardBody from "components/molecules/CardBody/CardBody";
import Heading from "components/atoms/Heading/Heading";
import ButtonWrapper from "components/atoms/Button/Button";
import CardMedia from "components/molecules/CardMedia/CardMedia";

import placeImage from "assets/images/hero_banner03.jpg";
import Section from "components/molecules/Section/Section";

export default {
  title: "Components/molecules/Card",
  component: Card,
};

export const usage = () => (
  <Section inverse>
    <Card>
      <CardBody>
        <Heading>
          <h6>Título</h6>
        </Heading>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <div>
          <ButtonWrapper variant="link" color="primary">
            SAIBA MAIS
          </ButtonWrapper>
        </div>
      </CardBody>
    </Card>
  </Section>
);

export const withMedia = () => (
  <Section inverse>
    <Card>
      <CardMedia image={placeImage} />
      <CardBody>
        <Heading>
          <h6>Título</h6>
        </Heading>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <div>
          <ButtonWrapper variant="link" color="primary">
            SAIBA MAIS
          </ButtonWrapper>
        </div>
      </CardBody>
    </Card>
  </Section>
);
