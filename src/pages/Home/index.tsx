import { Post } from "./components/Post";
import { ProfileCard } from "./components/ProfileCard";
import { SearchForm } from "./components/SearchForm";
import { HomeContainer, PostList } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <ProfileCard/>
            <SearchForm/>
            <PostList>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </PostList>
        </HomeContainer>
    )
}