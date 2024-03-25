import React from 'react'

import { 
  ContactLink, 
  Menu, 
  Wrapper, 
} from './styles'

import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <Wrapper>
      <img src={logo} alt="TechDragon" height={49}/>
      <Menu>
        <a>
          Início
        </a>
        <a>
          Serviços
        </a>
        <a>
          Sobre
        </a>
        <ContactLink>
          Contato
        </ContactLink>
      </Menu>
    </Wrapper>
  )
}

export default Header