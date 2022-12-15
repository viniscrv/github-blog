import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { Post } from "./components/Post";
import { ProfileCard } from "./components/ProfileCard";
import { HomeContainer, PostList, SearchForm } from "./styles";

export function Home() {

    interface PostFormatType {
        url: string;
        title: string;
        body: string;
        created_at: string;
        number: number;
    }

    const [issues, setIssues] = useState<PostFormatType[]>([]);

    const [search, setSearch] = useState("");

    const totalPublications = issues.length; 

    const filtradedIssues = issues.filter((issue) => issue.title.toLowerCase().includes(search.toLowerCase()));

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

    return (
        <HomeContainer>
            <ProfileCard/>
            <SearchForm>
                <header>
                    <h4>Publicações</h4>
                    <span>{totalPublications} publicações</span>
                </header>
                    <input 
                    type="text" 
                    placeholder="Buscar conteúdo" 
                    onChange={(e) => setSearch((e.target.value))} 
                    value={search} 
                    />
            </SearchForm>
            <PostList>
                {filtradedIssues.map((issue:PostFormatType) => {
                    return <Post key={issue.url} title={issue.title} content={issue.body} number={issue.number} date={issue.created_at} />
                })}
            </PostList>
        </HomeContainer>
    )
}