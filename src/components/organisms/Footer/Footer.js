import React from "react";
import {
  FaPhone,
  FaBuilding,
  FaEnvelope,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import { Root, IconContainer, FooterLink } from "./style";
import Container from "components/atoms/ContainerRoot/ContainerRoot";
import { GridRoot } from "components/atoms/Grid/style";
import Heading from "components/atoms/Heading/Heading";

const Footer = () => (
  <>
    <Root>
      <Container>
        <GridRoot md={3}>
          <div>
            <Heading>
              <h6>Projeto SmartEye</h6>
            </Heading>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
              sapiente aperiam unde, ipsum debitis tempora nesciunt odio, velit
              culpa reiciendis sed corporis voluptatibus odit tempore asperiores
              nostrum possimus a optio.
            </p>
          </div>
          <div>
            <Heading>
              <h6>Contatos</h6>
            </Heading>
            <p>
              <IconContainer>
                <FaPhone />
              </IconContainer>
              (84) 0800-4041-2594{" "}
            </p>
            <p>
              <IconContainer>
                <FaEnvelope />
              </IconContainer>
              E-mail: johndue@smarteyern.com.br
            </p>
            <p>
              <IconContainer>
                <FaBuilding />
              </IconContainer>
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div>
            <Heading>
              <h6>Redes Sociais</h6>
            </Heading>
            <p>
              <IconContainer>
                <FaFacebookF />
              </IconContainer>
              <FooterLink target="_black" href="http://facebook.com/">
                Facebook
              </FooterLink>
            </p>
            <p>
              <IconContainer>
                <FaLinkedin />
              </IconContainer>
              <FooterLink target="_black" href="http://linkedin.com/">
                Linkedin
              </FooterLink>
            </p>
            <p>
              <IconContainer>
                <FaTwitter />
              </IconContainer>
              <FooterLink target="_black" href="http://twitter.com/">
                Twitter
              </FooterLink>
            </p>
          </div>
        </GridRoot>
      </Container>
    </Root>
  </>
);

export default Footer;
