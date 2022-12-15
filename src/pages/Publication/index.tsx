import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faArrowUpRightFromSquare, faCat, faComment, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { PublicationBody, PublicationContainer, PublicationHeader } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";

export function Publication() {

    const navigate = useNavigate();

    const { number } = useParams();

    interface postContetFormat {
        title?: string;
        body?: string;
        user: {
            login: string;
        };
        comments: number;
        created_at: string;
    }

    const [postContent, setPostContent] = useState<postContetFormat>();

    async function fetchIssueContent() {
        const response = await api.get(`repos/viniscrv/github-blog/issues/${number}`);

    setPostContent(response.data);
    }

    useEffect(() => {
        fetchIssueContent();
    },[]);

    function log(){
        console.log(postContent);
    }

    return (
        <PublicationContainer>
                <button onClick={log} >log</button>
            <PublicationHeader>
                <header>
                    <button onClick={() => navigate("/")}><FontAwesomeIcon icon={ faChevronLeft } /> VOLTAR</button>
                    <a href="#">VER NO GITHUB <FontAwesomeIcon icon={ faArrowUpRightFromSquare } /></a>
                </header>
                <h3>{postContent?.title}</h3>
                <div className="icons"> 
                    <div className="icons__info">
                        <FontAwesomeIcon icon={ faCat } size="sm"/>
                        {postContent?.user.login}
                    </div>
                    <div className="icons__info">
                        <FontAwesomeIcon icon={ faCalendarDays } size="sm"/>
                        {postContent?.created_at}
                    </div>
                    <div className="icons__info">
                        <FontAwesomeIcon icon={ faComment } size="sm"/>
                        {`${postContent?.comments} comentários`}
                    </div>
                </div>
            </PublicationHeader>

            <PublicationBody>
                {postContent?.body}
            </PublicationBody>

        </PublicationContainer>
    )
}