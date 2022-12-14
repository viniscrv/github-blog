import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faArrowUpRightFromSquare, faCat  } from "@fortawesome/free-solid-svg-icons";
import { PublicationBody, PublicationContainer, PublicationHeader } from "./styles";
import { useNavigate } from "react-router-dom";

export function Publication() {

    const navigate = useNavigate();

    return (
        <PublicationContainer>
            <PublicationHeader>
                <header>
                    <button onClick={() => navigate("/")}><FontAwesomeIcon icon={ faChevronLeft } /> VOLTAR</button>
                    <a href="#">VER NO GITHUB <FontAwesomeIcon icon={ faArrowUpRightFromSquare } /></a>
                </header>
                <h3>JavaScript data types and data structures</h3>
                <div className="icons"> 
                    <div className="icons__info">
                        <FontAwesomeIcon icon={ faCat } size="sm"/>
                        usuario
                    </div>
                    <div className="icons__info">
                        <FontAwesomeIcon icon={ faCat } size="sm"/>
                        usuario
                    </div>
                </div>
            </PublicationHeader>

            <PublicationBody>
            Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

            Dynamic typing
            JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
            </PublicationBody>

        </PublicationContainer>
    )
}