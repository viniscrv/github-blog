import { useNavigate } from "react-router-dom";
import { PostContainer } from "./styles";

interface PostFormat {
    content?: string;
    title?: string;
}

export function Post({title, content}: PostFormat) {

    const navigate = useNavigate();

    return (
        <PostContainer onClick={() => navigate("/publication")}>
            <header>
                <h4>{title}</h4>
                <span>Há 1 dia</span>
            </header>

            <p>{content}</p>
        </PostContainer>
    )
}