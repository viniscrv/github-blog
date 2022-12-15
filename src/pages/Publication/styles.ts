import styled from "styled-components";

export const PublicationContainer = styled.main`
    max-width: 54rem;
    width: 100%;
    margin: 0 auto;
`

export const PublicationHeader = styled.header`
    background-color: ${props => props.theme["base-card"]};
    width: 100%;
    height: 10.5rem;
    border-radius: 10px;
    margin-top: -4.5rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    header {
        display: flex;
        justify-content: space-between;

        button {
            color: ${props => props.theme["green"]};
            background-color: transparent;
            border: 0;
            font-size: 0.75rem;
            font-weight: bold;
            cursor: pointer;
        }
        a {
            color: ${props => props.theme["green"]};
            font-size: 0.75rem;
            font-weight: bold;
            text-decoration: none;

        }
    }
    h3 {
        color: ${props => props.theme["base-title"]};
        font-size: 1.5rem;
    }
    .icons {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: max-content;
        gap: 1.25rem;
        justify-self: flex-end;
        .icons__info {
            font-size: 1rem;
            color: ${props => props.theme["base-span"]};
            gap: .5rem;
            display: flex;
            align-items: center;
            flex-direction: row;
        }
    }
`

export const PublicationBody = styled.div`
    background-color: ${props => props.theme["base-card"]};
    font-size: 1.1rem;
    margin-top: 2rem;
    padding: 2.5rem 2rem;
    border-radius: 10px;
    line-height: 1.6;

`