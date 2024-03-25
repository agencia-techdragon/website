import React from 'react'

import { 
  Menu, 
  MenuContainer, 
  Wrapper, 
  MenuBox, 
  MenuTitle,
  ContactInfo,
  AboutDescription,
  Copyright,
  TechSpan,
  LogoSection
} from './styles'

import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <Wrapper>
      <MenuContainer>
        <MenuBox>
          <MenuTitle>
            Sobre nós
          </MenuTitle>
          <AboutDescription>
            Somos uma agência de marketing digital fundada em 2024 por Paulo Eiryio, experiente em
            tráfego pago e web design, e Kaique Araujo experiente em programação full-stack.
          </AboutDescription>
        </MenuBox>
        <MenuBox>
          <MenuTitle>Corporativo</MenuTitle>
          <Menu>
            <a>
              Início
            </a>
            <a>
              Contato
            </a>
            <a>
              Serviços
            </a>
            <a>
              Sobre
            </a>
          </Menu>
        </MenuBox>
        <MenuBox>
          <MenuTitle>
            Contato
          </MenuTitle>
          <ContactInfo>
            Email.: agencia@techdragon.digital
            <br/>
            Tel.: (11) 97460-4368
          </ContactInfo>
        </MenuBox>
      </MenuContainer>
      <LogoSection>
        <img src={logo} height={40}/>
      </LogoSection>
      <Copyright>
        &copy; 2024 <TechSpan>Tech</TechSpan>Dragon
      </Copyright>
    </Wrapper>
  )
}

export default Footer