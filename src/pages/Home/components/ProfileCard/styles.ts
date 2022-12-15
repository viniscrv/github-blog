import styled from "styled-components";

export const ProfileCardContainer = styled.div`
    background-color: ${props => props.theme["base-card"]};
    width: 100%;
    height: 13.25rem;
    border-radius: 10px;
    margin-top: -4.5rem;
    display: flex;
    align-items: center;
    padding: 2rem;
    gap: 2rem;

    img {
        width: 9.25rem;
        border-radius: 8px;
    }

    div {
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        gap: 1rem;
        flex: 1;
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;

            h3 {
                font-size: 1.5rem;
                color: ${props => props.theme["base-title"]};
            }
            .link {
                display: flex;
                align-items: center;
                gap: .5rem;
                a {
                    color: ${props => props.theme["green"]};
                    text-decoration: none;
                }
            }
        }
        .icons {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            width: min-content;
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
    }
`