import React from 'react';
import {
  FaPhone,
  FaBuilding,
  FaEnvelope,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

import { Root, IconContainer, FooterLink } from './style';
import Container from 'components/atoms/ContainerRoot/ContainerRoot';
import { GridRoot } from 'components/atoms/Grid/style';
import Heading from 'components/atoms/Heading/Heading';

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
              O SmartEye é uma solução integrada de hardware e software para a
              identificação de aglomerações e gerenciamento de recursos médicos
              Usando vários tipos de sensores em sistemas embarcados que
              alimentam nossa IA e as Dashboards visíveis para os gestores de
              saúde
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
              (84) 0800-4041-2594{' '}
            </p>
            <p>
              <IconContainer>
                <FaEnvelope />
              </IconContainer>
              E-mail: services@smateye.tec.br
            </p>
            <p>
              <IconContainer>
                <FaBuilding />
              </IconContainer>
              http://github.com/smarteyern
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
              <FooterLink target="_black" href="http://facebook.com/smarteyern">
                Facebook
              </FooterLink>
            </p>
            <p>
              <IconContainer>
                <FaLinkedin />
              </IconContainer>
              <FooterLink target="_black" href="http://linkedin.com/smarteyern">
                Linkedin
              </FooterLink>
            </p>
            <p>
              <IconContainer>
                <FaTwitter />
              </IconContainer>
              <FooterLink target="_black" href="http://twitter.com/smarteyern">
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
