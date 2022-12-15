import { useNavigate } from "react-router-dom";
import { dateFormatter } from "../../../../utils/formatter";
import { PostContainer } from "./styles";

interface PostFormat {
    content: string;
    title: string;
    number: number;
    date: string;
}

export function Post({title, content, number, date}: PostFormat) {

    const navigate = useNavigate();

    return (
        <PostContainer onClick={() => navigate(`/publication/${number}`)}>
            <header>
                <h4>{title}</h4>
                <span>{dateFormatter.format(new Date(date))}</span>
            </header>
            <p>{content}</p>
        </PostContainer>
    )
}