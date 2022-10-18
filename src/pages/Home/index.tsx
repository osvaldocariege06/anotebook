
import { Container, HomeContent } from "./styles";
import { Link } from 'react-router-dom'

interface HandlerOpenModalProps {
    handlerOpenModal: () => void
  }


export function Home({ handlerOpenModal }: HandlerOpenModalProps){

   

    return(
        <Container>
            <HomeContent>
            
                <h1>ANOTE</h1>
                <p>Anote aqui a tuas tarefas diariar</p>
                <div>
                    <button onClick={handlerOpenModal}>Nova tarefa</button>
                    <Link to={'mytasks'}>
                        <button> Minhas tarefas</button>
                        </Link>
                </div>
            </HomeContent>
        </Container>
    )
}