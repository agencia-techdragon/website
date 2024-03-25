import styled from 'styled-components'
import coverMobile from '../../assets/cover_mobile.png'
import servicesBackground from '../../assets/services-background.jpg'
import aboutBackground from '../../assets/about-background.jpg'

export const SectionHeader = styled.h1`
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  color: #fff;
  background: #000;
  padding: 10px;
`

export const Hero = styled.section`
  height: 480px;
  display: flex;
  padding: 80px;
  box-sizing: border-box;
  justify-content: center;
  flex-direction: column;
  background-attachment: fixed;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-y: 64px;

  h1 {
    font-size: 70px;
    font-family: Montserrat, Inter, Arial, Helvetica, sans-serif;
    font-weight: 800;
  }

  span {
    font-family: Montserrat, Inter, Arial, Helvetica, sans-serif;
    font-weight: 800;
    color: var(--accent-color);
  }

  @media (max-width: 360px) {
    & {
      background-image: url(${coverMobile});
    }
  }
`

export const Content = styled.main``

export const Contact = styled.section`
  color: #000;
  > h1 {
    background: var(--accent-color);
  }
`

export const ContactContainer = styled.div`
  background: #fff;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-y: -800px;
  display: flex;
  padding: 40px;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
`

export const ContactBox = styled.div`
  display: flex;
  justify-content: center;
  background: rgba(255,255,255,0.5);
  width: 290px;
  border: 1px solid var(--primary-60);
  padding: 20px;
  border-radius: 6px;
  backdrop-filter: blur(5px) saturate(100%);

  label {
    margin-bottom: 10px;
    font-weight: bold;
  }

  form {
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  input {
    width: 100%;
    margin-bottom: 10px;
  }

  button {
    width: 152px;
    height: 40px;
    padding: 0;
    border-radius: 16px;
    background: var(--accent-color);
    color: #fff;
  }

  textarea {
    margin-bottom: 10px;
  }
`

export const Services = styled.section`
  background-image: url(${servicesBackground});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position-y: -40px;
`

export const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 60px;
`

export const Service = styled.div`
  padding: 20px;
  width: 200px;
  height: 300px;
  border: 3px solid var(--accent-color);
  margin: 40px;
  background: rgba(0,0,0,0.50);
  backdrop-filter: blur(25px);
  border-radius: 16px;
`

export const ServiceTitle = styled.h1`
  margin-bottom: 10px;
`
export const ServiceDescription = styled.p``

export const AboutUs = styled.section`
  background-image: url(${aboutBackground});
  background-size: 100%;
  background-position: center center;
`

export const AboutUsContainer = styled.div`
  display: flex;
  padding: 30px;
  justify-content: space-around;
  flex-wrap: wrap;
`

export const AboutUsDescriptionBox = styled.div`
  border: 1px solid white;
  padding: 20px;
  max-width: 30%;
  backdrop-filter: blur(25px);
  background-color: rgba(0,0,0,0.5);
  border-radius: 16px;

  h1 {
    font-size: 28px;
    margin-bottom: 10px;
  }
`
