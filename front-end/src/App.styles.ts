import styled from "styled-components";

export const AppStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: var(--xl);
    background-color: var(--secondary-color-1);
`;

export const Main = styled.main`
    position: relative;
    width: 100%;
    max-width: 900px;
`;

export const Top = styled.div`
    display: flex;
`;

export const TitleContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    border-radius: 8px;
    border: 1px solid var(--secondary-color-4);
    background-color: var(--secondary-color-2);
`;

export const Title = styled.h1`
    font-size: 24px;
    color: var(--neutral-color-2);
    text-align: center;
`;
