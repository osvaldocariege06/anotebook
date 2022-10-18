

import { Header } from "../../Components/Header";
import { Container } from "./styles";
import { ThemeContext } from 'styled-components'
import light from '../../styles/Themes/light-theme'
import dark from '../../styles/Themes/dark-theme'
import UsePersistedState from '../../utils/usePersistedState';
import { Content } from './styles';
import { ItemTask } from "../../Components/ItemTask";
import { useContext, useState } from "react";



interface WorkSpaceProps {
    toggleTheme: () => void;
}

export function WorkSpace({ toggleTheme }: WorkSpaceProps) {

   

    return (
        
            <Container>
                <Header toggleTheme={toggleTheme} />
                <Content>
                    <h4>Nome da terefa</h4>
                    <hr />
                    <section>
                        <ItemTask />
                        <ItemTask />
                        
                    </section>
                </Content>
            </Container>
    )
}