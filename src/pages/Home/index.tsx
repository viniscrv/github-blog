import { ProfileCard } from "./components/ProfileCard";
import { SearchForm } from "./components/SearchForm";
import { HomeContainer } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <ProfileCard/>
            <SearchForm/>
        </HomeContainer>
    )
}