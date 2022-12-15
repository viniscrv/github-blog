import styled from "styled-components";

export const HomeContainer = styled.main`
    max-width: 54rem;
    width: 100%;
    margin: 0 auto;
`

export const PostList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
`

export const SearchForm = styled.div`
    margin: 2rem 0;
    display: flex;
    gap: 1rem;
    flex-direction: column;

    header {
        display: flex;
        width: 100%;
        justify-content: space-between;

        h4 {
            font-size: 1.125rem;
            color: ${props => props.theme["base-subtitle"]};
        }
        span {
            font-size: 0.875rem;
            color: ${props => props.theme["base-span"]};
        }
    }

    form {
        input {
            width: 100%;
            padding: 1rem;
            color: ${props => props.theme["base-text"]};
            background-color: ${props => props.theme["base-input"]};
            border: 1px solid ${props => props.theme["base-border"]};
            border-radius: 6px;
        }
    }
`