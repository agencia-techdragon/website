import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 0 30px;
  box-sizing: border-box;
  height: 64px;
  width: 100%;
  border-bottom: 2px solid var(--accent-color);
  background: var(--primary-60);
  position: fixed;
  z-index: 10;

  @media (max-width: 800px) {
    justify-content: center;
  }
`

export const Menu = styled.nav`
  display: inline;

  a {
    padding: 20px 32px;
    font-size: 20px;
    box-sizing: border-box;
    font-weight: bold;
  }

  @media (max-width: 800px) {
    & {
      display: none;
    }
  }
`

export const ContactLink = styled.a`
  background: var(--accent-color);
  color: #fff;
`
