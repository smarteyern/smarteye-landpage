import React from "react";

import CardBody from "components/molecules/CardBody/CardBody";
import Heading from "components/atoms/Heading/Heading";
import ButtonWrapper from "components/atoms/Button/Button";

export default {
  title: "Components/molecules/CardBody",
  component: CardBody,
};

export const usage = () => (
  <CardBody>
    <Heading>
      <h6>Título</h6>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      <div>
        <ButtonWrapper variant="link" color="primary">
          SAIBA MAIS
        </ButtonWrapper>
      </div>
    </Heading>
  </CardBody>
);
