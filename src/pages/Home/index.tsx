import { useContext, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { Post } from "./components/Post";
import { ProfileCard } from "./components/ProfileCard";
import { SearchForm } from "./components/SearchForm";
import { HomeContainer, PostList } from "./styles";

export function Home() {

    interface PostFormatType {
        url?: string;
        title?: string;
        body?: string;
    }

    const [issues, setIssues] = useState<PostFormatType[] | undefined>();

    async function fetchIssues() {
        const response = await api.get("/search/issues", {
            params: {
                q: `repo:viniscrv/github-blog`,
            }
        });
        setIssues(response.data.items);
    }

    useEffect(() => {
        fetchIssues();
    },[]);

    function log(){
        console.log(issues);
    }

    return (
        <HomeContainer>
            <ProfileCard/>
            <SearchForm/>
            <button onClick={log}>log</button>
            <PostList>
                {issues && 
                issues.map((issue:PostFormatType) => {
                    return <Post key={issue.url} title={issue.title} content={issue.body} />
                })}
            </PostList>
        </HomeContainer>
    )
}