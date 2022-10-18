
import { FormEvent, useState, useContext } from 'react'
import ReactModal from 'react-modal'
import { Home } from './pages/Home'
import { MyTasks } from './pages/MyTasks'
import { WorkSpace } from './pages/WorkSpace'
import { GlobalStyles } from './styles/globalStyles'

import { Routes, Route } from 'react-router-dom'

import light from './styles/Themes/light-theme'
import dark from './styles/Themes/dark-theme'
import { ThemeProvider } from 'styled-components'
import UsePersistedState from './utils/usePersistedState'

ReactModal.setAppElement('#root')


function App() {



  const [theme, setTheme] = UsePersistedState('theme', dark)

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark)
  }


  const [isOpenModal, setIsOpenModal] = useState(false)

  const handlerOpenModal = () => {
    setIsOpenModal(true)
  }
  function handlerCloseModal() {
    setIsOpenModal(false)
  }

  const [nameTask, setNameTask] = useState('')
  const [descriptionTask, setDescriptionTask] = useState('')

  function formModal(event: FormEvent) {
    event.preventDefault()

    console.log({
      nameTask,
      descriptionTask
    });

  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>

        <GlobalStyles />
        <Routes>
          <Route path='/' element={<Home handlerOpenModal={handlerOpenModal}/>} />
          <Route path='/workspace' element={<WorkSpace toggleTheme={toggleTheme} />} />
          <Route path='/mytasks' element={<MyTasks toggleTheme={toggleTheme} />} />
        </Routes>
        <ReactModal
          isOpen={isOpenModal}
          onRequestClose={handlerCloseModal}
          overlayClassName='react-modal-overlay'
          className='react-modal-content'
        >
          <form action="" onSubmit={formModal}>
            <a className='react-modal-close' onClick={handlerCloseModal}>X</a>
            <h2>Cadastrar nova tarefa</h2>

            <input
              type="text"
              placeholder="Nome da tarefa:"
              value={nameTask}
              onChange={event => setNameTask(event.target.value)}
            />
            <input
              type="text"
              placeholder="Descrição da tarefa:"
              value={descriptionTask}
              onChange={event => setDescriptionTask(event.target.value)}
            />
            <button
              type="submit"
            >
              Nova tarefa
            </button>
          </form>

        </ReactModal>


      </ThemeProvider>
    </div>

  )
}

export default App
