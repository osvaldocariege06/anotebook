

import { Header } from "../../Components/Header";
import { Container } from "./styles";
import { ThemeProvider } from 'styled-components'
import light from '../../styles/Themes/light-theme'
import dark from '../../styles/Themes/dark-theme'
import UsePersistedState from '../../utils/usePersistedState';
import { Content } from './styles';
import { Task } from "../../Components/Tasks";

interface MyTasksProps {
    toggleTheme: () => void;
}

export function MyTasks({ toggleTheme }: MyTasksProps) {


    return (
        
            <Container>
                <Header toggleTheme={toggleTheme} />
                <Content>
                    <h4>Minhas terefas</h4>
                    <hr />
                    <section>
                        <Task />
                        <Task />
                    </section>
                </Content>
            </Container>
    )
}