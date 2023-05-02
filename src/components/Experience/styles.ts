import styled from "styled-components";


export const Container = styled.section`
    margin-top: 15rem;
    h2{
        text-align: center;
        font-size: 4rem;
        margin-bottom: 5rem;
    }
    .experiences {
        h3{
            font-size: 24px;
        }

        h4{
            font-size: 18px;
            opacity: 0.5;
        }

        span{
            font-size: 16px !important;
            font-weight: 800 !important;
        }
    }
  p{
    font-size: 14px;
    letter-spacing: 0.12rem;
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
`