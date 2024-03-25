import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '../../components/Button'

import { 
  AboutUs,
  AboutUsContainer,
  AboutUsDescriptionBox,
  Contact, 
  ContactBox, 
  ContactContainer, 
  Content, 
  Hero, 
  SectionHeader, 
  Service, 
  ServiceDescription, 
  ServiceTitle, 
  Services, 
  ServicesContainer
} from './styles'

import LightInput from '../../components/LightInput'

import CodeIcon from '@mui/icons-material/Code'
import BoltIcon from '@mui/icons-material/Bolt'
import BrushIcon from '@mui/icons-material/Brush'

import cover from '../../assets/cover.png'
import contactImage from '../../assets/contact.jpg'
import aboutLogo from '../../assets/about_logo.png'
import Center from '../../components/Center'

const Home = () => {
  return (
    <>
      <Header/>
      <Content>
        <Hero style={{backgroundImage: `url(${cover})`}}>
          <h1><span>Tech</span>Dragon</h1>
          <h2>Poder digital para o seu negócio</h2>
        </Hero>
        <Services>
          <SectionHeader>Serviços</SectionHeader>
          <ServicesContainer>
            <Service>
              <CodeIcon/>
              <ServiceTitle>
                Criação de websites
              </ServiceTitle>
              <ServiceDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Donec condimentum lectus sit amet tristique hendrerit. 
                Nulla non euismod mi. Phasellus lorem sem ...
              </ServiceDescription>
            </Service>
            <Service>
              <BoltIcon/>
              <ServiceTitle>
                Anúncios
              </ServiceTitle>
              <ServiceDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Donec condimentum lectus sit amet tristique hendrerit. 
                Nulla non euismod mi. Phasellus lorem sem ...
              </ServiceDescription>
            </Service>
            <Service>
              <BrushIcon/>
              <ServiceTitle>
                Design
              </ServiceTitle>
              <ServiceDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Donec condimentum lectus sit amet tristique hendrerit. 
                Nulla non euismod mi. Phasellus lorem sem ...
              </ServiceDescription>
            </Service>
          </ServicesContainer>
        </Services>
        <AboutUs>
          <SectionHeader>Sobre nós</SectionHeader>
          <AboutUsContainer>
            <img src={aboutLogo} alt="TechDragon" width="30%" />
            <AboutUsDescriptionBox>
              <h1>TechDragon</h1>
              <p>
              Somos uma agência de marketing digital fundada em 2024 por Paulo Eiryio, experiente em
            tráfego pago e web design, e Kaique Araujo experiente em programação full-stack.

            Nosso sonho é elevar os padrões da da publicidade no mercado criando sites profissionais e
            conteúdos de qualidade para nossos clientes.

              </p>
            </AboutUsDescriptionBox>
          </AboutUsContainer>
        </AboutUs>
        <Contact>
          <SectionHeader>Contato</SectionHeader>
          <ContactContainer style={{backgroundImage: `url(${contactImage})`}}>
            <ContactBox>
              <form>
                <label>Nome</label>
                <LightInput type='text' name='nome' placeholder='Nome'/>
                <label>Empresa</label>
                <LightInput type='text' name='company' placeholder='Empresa'/>
                <label>Telefone</label>
                <LightInput type='tel' name='phone-number' placeholder='Telefone'/>
                <label>Email</label>
                <LightInput type='email' name='email' placeholder='Email'/>
                <label>Mensagem</label>
                <textarea></textarea>
                <Center>
                  <Button type='submit'>Enviar</Button>
                </Center>
              </form>
            </ContactBox>
          </ContactContainer>
        </Contact>
      </Content>
      <Footer/>
    </>
  )
}

export default Home