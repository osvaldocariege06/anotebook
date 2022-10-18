
import { useContext, useState } from 'react'
import { Container } from './styles'
import { ThemeContext } from 'styled-components'
import { Link } from 'react-router-dom'


import Switch from 'react-switch'


interface Props {
    toggleTheme(): void;
}


export const Header = ({toggleTheme}: Props) => {

    const { colors, title } = useContext(ThemeContext)

    return(
        <Container>
            <div>
                <Link to={'/'} className='logo'>ANOTE</Link>
                <nav>
                    <a href="#">Guardar</a>
                    <a href="#">Sair</a>
                    <Switch  
                        onChange={toggleTheme}
                        checked={title === 'dark'}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        height={10}
                        width={40}
                        handleDiameter={20}
                        offColor={'#222'}
                        onColor={colors.primary}
                    />
                </nav>
            </div>
        </Container>
    )
}