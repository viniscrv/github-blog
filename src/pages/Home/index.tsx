import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { Post } from "./components/Post";
import { ProfileCard } from "./components/ProfileCard";
import { HomeContainer, PostList, SearchForm } from "./styles";

export function Home() {

    interface PostFormatType {
        url?: string;
        title?: string;
        body?: string;
        updated_at?: string;
        number?: number;
    }

    const [issues, setIssues] = useState<PostFormatType[]>([]);

    // const [issueField, setIssueField] = useState("");

    const totalPublications = issues.length; 

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
            <SearchForm>
                <header>
                    <h4>Publicações</h4>
                    <span>{totalPublications} publicações</span>
                </header>

                <form>
                    <input 
                    type="text" 
                    placeholder="Buscar conteúdo" 
                    // onChange={(e) => setIssueField(e.target.value)} 
                    // value={issueField} 
                    />
                </form>
            </SearchForm>
            <button onClick={log}>log</button>
            <PostList>
                {issues.map((issue:PostFormatType) => {
                    return <Post key={issue.url} title={issue.title} content={issue.body} number={issue.number} date={issue.updated_at} />
                })}
            </PostList>
        </HomeContainer>
    )
}