


import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

:root{
  --cyan-900: #49E1F6;

  --white: #ffffff;

  --gray-700: #BDBDBD;
  --gray-500: #524F4F;
  --gray-400: #2A2929;
  --gray-200: #222222;
  --gray-100: #1b1b1b;
}

html {
  @media (max-width: 1080px){
    font-size: 93.75%;
  }

  @media (max-width: 720px){
    font-size: 87.5%;
  }
}

body {
  font-family: 'Poppins', sans-serif;
  color: var(--white);
  background-color: var(--gray-100);
}

.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
  
}

a {
  color: var(--white);
  text-decoration: none;
  transition: color 0.2px;
}

a:hover {
  text-decoration: none;
  color: var(--gray-700); 
}


.react-modal-overlay {
        background-color: rgba(0,0,0,0.6);

        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content {
      position: relative;
      background-color: var(--gray-200);
        width: 450px;
        max-width: 100%;
        padding: 3rem;
        border-radius: 1rem;

        

        h2 {
          text-align: center;
            color: var(--white);
            margin: 1rem auto 2rem;
        }

        input {
          background-color: var(--gray-100);
          border: 1px solid var(--cyan-900);
          height: 4rem;
          width: 100%;
          margin: 0.5rem auto;
          border-radius: 0.25rem;
          color: var(--gray-700);
          font-weight: 500;
          padding: 0 1rem;
        }

        button {
          width: 100%;
          height: 3rem;
          background-color: var(--cyan-900);
          border-radius: 0.25rem;
          color: var(--gray-100);
          border: 0;
          font-weight: 500;
          margin-top: 1rem;
          cursor: pointer;
          transition: filter 0.2s;

          &:hover {
            filter: brightness(0.8);
          }
        }
    }
    .react-modal-close {
      position: absolute;
      top: 2rem;
      right: 3.4rem;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 700;
      color: var(--cyan-900);
    }
  

`
