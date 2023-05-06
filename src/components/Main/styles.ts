import styled from "styled-components";


export const Container = styled.main`
  position: relative;
  z-index: 0;
  padding: 0 25rem;
  overflow-x: hidden;
  #tsparticles{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  @media (max-width: 1500px){
    padding: 0 5rem;
  }

  @media (max-width: 740px){
    padding: 0 3rem;
  }

  @media(max-width: 360px){
    padding: 0 3rem;
  }
`
