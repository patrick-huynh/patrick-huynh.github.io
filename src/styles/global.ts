import { createGlobalStyle } from "styled-components";
import PoppinsWoff from "../fonts/Poppins/Poppins.woff";
import PoppinsWoff2 from "../fonts/Poppins/Poppins.woff2";
import PoppinsBoldWoff from "../fonts/Poppins/PoppinsBold.woff";
import PoppinsBoldWoff2 from "../fonts/Poppins/PoppinsBold.woff2";

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Poppins';
      src: url(${PoppinsWoff2}) format('woff2'),
      url(${PoppinsWoff}) format('woff');
    font-weight: normal,
    font-style: normal;
  }
  @font-face {
    font-family: 'PoppinsBold';
      src: url(${PoppinsBoldWoff2}) format('woff2'),
      url(${PoppinsBoldWoff}) format('woff');
    font-weight: normal,
    font-style: normal;
  }


  :root{
    --pink: #E31F71;
    --grey: #797a7d;
    --black: #212121;
    --green: #23ce6b;
    --primary: #368bcf;
    scroll-padding-top: 10rem;

    &.light{

      body{
        transition: 0.5s;
        background-color: #f5f5f5;
        color: var(--black);
      }

      .logo{
        color: var(--black);
      }

      header.header-fixed{
        transition: 0.5s;
        background-color: #f5f5f550;
        a{
          transition: 0.5s;
          color: black;
        }
        .menu,.menu:before, .menu:after{
          background-color: var(--black); 
        }
        .menu.active{
          background-color: rgba(555,555,555,0);
        }
      }

      footer.footer{
        transition: 0.5s;
        background-color: rgba(0,0,0,0.1);
        color: var(--black);
      }

      form{
        input,textarea{
          transition: 0.5s;
          border: solid 1px var(--black);
          color: var(--black);
          &::placeholder{
            transition: 0.5s;
            color: var(--black);
          }
        }
      }

      // Change the portfolio card color
      .project {
        background-color: #dbdbdb;
        color: var(--black);
      }

      .experience-timeline-element {
        background-color: #dbdbdb !important;
        .vertical-timeline-element-content-arrow {
          border-right-color: #dbdbdb !important;
        }
      }

    }
  }



  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--black);
    color: #FFFF;
  }

  p{
    font-weight: 900 !important;
  }

  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    letter-spacing: 0.07rem;
  }

  h1, h2, h3, h4{
    font-family: 'PoppinsBold', sans-serif;
  }

  

  a{
    text-decoration: none;
  }

  button, .button{
    border: none;
    cursor: pointer;
    background-color: var(--primary);
    color: #FFFF;
    border-radius: 2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover{
      filter: brightness(0.8);
    }
  }

  button:disabled, .button:disabled{
    filter: brightness(0.8);
    cursor: not-allowed;
  }


  .logo{
    font-size: 3rem;
    color: #FFFF;
    // &::first-letter{
    //   color: var(--green);
    // }
  }
  

`