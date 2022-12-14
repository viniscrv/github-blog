import { PostContainer } from "./styles";

interface PostFormat {
    content?: string;
    title?: string;
}

export function Post({title, content}: PostFormat) {

    return (
        <PostContainer>
            <header>
                <h4>{title}</h4>
                <span>Há 1 dia</span>
            </header>

            <p>{content}</p>
        </PostContainer>
    )
}