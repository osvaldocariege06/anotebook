

import styled from 'styled-components'

export const Container = styled.section`

    background:  url('./src/assets/images/home-1400x900.png') center  no-repeat rgba(34,34,34,0.9);
    filter: opacity(1);
    background-blend-mode: normal;
    box-shadow: inset 0px 250px 120px #222222,
              inset 0px -310px 150px #222222;
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

`
export const HomeContent = styled.div`

    padding-bottom: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        color: var(--cyan-900);
        font-weight: 700;
        text-align: center;
        letter-spacing: 1.5px;
        font-size: 4.5rem;
    }

    p{
        font-weight: 400;
        margin-bottom: 3rem;
        color: var(--gray-700);
    }
    & > div {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        button {
            flex: 1;
            height: 55px;
            width: 285.24px;
            border-radius: 6px;
            font-weight: 500;
            cursor: pointer; 
            transition: background 0.2s;

            &:active {
                transform: scale(1.1);
            }
        }
        button:nth-child(1) {
            border: 0;
            background: var(--cyan-900);
            color: var(--gray-100);
            &:hover {
                background: var(--gray-400);
                color: var(--white);
            }
        }
        
        & > a button:nth-child(1) {
            border: 1px solid var(--cyan-900);
            background: rgba(0,0,0,0);
            color: var(--cyan-900);

            &:hover {
                background: var(--cyan-900);
                color: var(--gray-100);
            }
        }

    }
   
`
