

import styled from "styled-components";

export const Container = styled.a`
    background-color: var(--gray-400);
    display: block;
    width: 100%;

    display: flex;
    justify-content: space-between;

    padding: 1rem 2rem;
    margin: 1rem 0;
    border-radius: 0.25rem;
    cursor: pointer;

    font-weight: 500;
    font-size: 1.2rem;

    transition: all 0.2s;

    &:hover {
        background-color: var(--gray-200);
    }

    img {
        color: red;
    }
`