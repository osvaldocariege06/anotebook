

import styled from "styled-components";

export const Container = styled.section`

background-color: ${props => props.theme.colors.background};
color: ${props => props.theme.colors.text};
height: 100vh;
    
`


export const Content = styled.main`
    max-width: 100%;
    width: 830px;
    margin: 5rem auto;
    padding: 0 4rem;

    h4 {
        font-size: 1.5rem;
        color: ${props => props.theme.colors.text};
    }
    hr {
        background-color: var(--cyan-900);
        height: 2px;
        border: 0;
    }
    section {
        margin-top: 2rem;
    }
`