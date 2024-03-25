import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --accent-color: #bc002d;
    --primary-100a: #171618;
    --primary-60: #26282B;
    --secundary-10: #fff;
    --secundary-10a: rgba(125,125,125);
  }

  * {
    margin: 0;
    padding: 0;
    font-family: Inter, Arial, sans-serif;
    font-optical-sizing: auto;
    font-variation-settings:
    "slnt" 0;
  }

  body {
    background: var(--primary-60);
    color: var(--secundary-10);
  }
`

export default GlobalStyles