
import { Container } from "./styles";

// assets 
import deleteIcon from '../../assets/images/delete-icone.svg'

export function Task() {

    return (
        <Container>
                <span>Tarefa 1</span>
                <img  src={deleteIcon} alt="Delete" />
        </Container>
    )
}