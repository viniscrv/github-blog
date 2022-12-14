import { faCat, faUserGroup, faArrowUpRightFromSquare  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { api } from "../../../../lib/axios";
import { ProfileCardContainer } from "./styles";

export function ProfileCard() {

    interface profileData {
        avatar_url?: string;
        name?: string;
        html_url?: string;
        bio?: string;
        followers?: number;
        login?: string;
    } 

    const [profileData, setProfileData] = useState<profileData>(); 

    async function fetchProfileData() {
        const response = await api.get("/users/viniscrv");

        setProfileData(response.data);
    }

    useEffect(() => {
        fetchProfileData();
    },[]);

    const theme = useTheme();

    return (
        <ProfileCardContainer>
            <img src={profileData?.avatar_url} alt="" />
            <div>
                <header>
                    <h3>{profileData?.name}</h3>
                    <span className="link">
                        <a href={profileData?.html_url} target="_blank">GITHUB</a>
                        <FontAwesomeIcon icon={ faArrowUpRightFromSquare } color={theme["blue"]} size="sm"/>
                    </span>
                </header>
                <p>{profileData?.bio}</p>
                <div className="icons">
                    <div className="icons__info">
                        <FontAwesomeIcon icon={ faCat } color={theme["base-label"]} size="sm"/>
                        {profileData?.login}
                    </div>
                    <div className="icons__info">
                        <FontAwesomeIcon icon={ faUserGroup } color={theme["base-label"]} size="sm"/>
                        {profileData?.followers}
                    </div>
                </div>
            </div>
        </ProfileCardContainer>
    );
}