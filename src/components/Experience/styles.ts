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
            color: #368bcf;
        }

        h4{
            font-size: 18px;
            opacity: 0.5;
        }

        span{
            font-size: 16px !important;
            font-weight: 800 !important;
        }

        .timeline-icon{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          
          .timeline-icon-img{
            width: 95%;
            height: 95%;
            object-fit: contain;
          }
        }

        .tech-list{
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 2rem;
          opacity: 0.6;
          li:hover {
            opacity: 1;
            color: #368bcf;
          }
          font-size: 1.4rem;
          font-weight: 900;
          padding-top: 20px;
          padding-bottom: 20px;
        }
    }
  p{
    font-size: 14px;
    letter-spacing: 0.12rem;
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
