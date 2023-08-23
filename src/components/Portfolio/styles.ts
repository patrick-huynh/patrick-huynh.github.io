import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;

  .external-link {
  }
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 5rem;
  }
  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;

    .project{
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      &:hover{
        transform: translateY(-5px);
        h3 {
          color: var(--primary);
          transition: 0.25s;
        }
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--primary);
        margin-bottom: 3.6rem;

        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .project-link {
          &:hover {
            opacity: 50%;
            transition: 0.25s;
          }
        }
        a > img {
          width: 5.0rem;
        }
      }
      
      h3{
        margin-bottom: 2rem;
      }

      p{
        letter-spacing: 0.07rem;
        margin-bottom: 2rem;
        a{
          color: #FFFF;
          border-bottom: 1px solid var(--primary);
          transition: color 0.25s;
          &:hover{
            color: var(--primary);
          }
        }
      }

      .img-preview {
        width: 100%;
        margin-bottom: 25px;
        border-radius: 1.2rem;
        height: 250px;
        object-fit: cover;
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
          li:hover {
            opacity: 1;
            color: #368bcf;
          }
        }
      }

    }
  }

  @media (max-width: 960px){
    .projects{
      // padding: 1rem;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    .projects{
      // padding: 1rem;
      grid-template-columns: 1fr;
    }
  }
`