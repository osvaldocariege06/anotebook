

import styled from "styled-components";

export const Container = styled.header`

    background: ${props => props.theme.colors.header};
    color: ${props => props.theme.colors.text};
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;


    
    & > div {
        width: 80%; 
        margin: 0 auto;

        display: flex;
        align-content: center;
        justify-content: space-between;

        & > a {
            color: ${props => props.theme.colors.text};
            font-weight: 500;
            font-size: 1.5rem;
        }

        nav {
            display: flex;
            gap: 4rem;
            align-content: center;
            justify-content: space-between;

            a {
                color: ${props => props.theme.colors.text};
            }

            a:hover {
                filter: brightness(0.8);
                color: ${props => props.theme.colors.text === '#BDBDBD'? '#49E1F6' : '#BDBDBD'};
            }
        }
    }
`