import styled from "styled-components";

export const PostContainer = styled.div`
    width: 26rem;
    height: 16.25rem;
    background-color: ${props => props.theme["base-card"]};
    border-radius: 10px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    cursor: pointer;

    header {
        display: flex;
        justify-content: space-between;
        h4 {
            color: ${props => props.theme["base-title"]};
            font-size: 1.25rem;
            font-weight: bold;
            max-width: 16rem;
        }
        span {
            color: ${props => props.theme["base-span"]};
            margin-top: 3px;
            width: max-content;
        }
    }
    p {
        display: -webkit-box;
        -webkit-line-clamp: 5; 
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`