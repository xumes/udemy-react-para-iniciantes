import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Image, Dropdown } from 'semantic-ui-react'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            usuario: ''
        }
    }

    componentDidMount() {
        const usuarioLogado = {
            nome: localStorage.getItem('nome'),
            foto: localStorage.getItem('foto')
        }

        this.setState({
            usuario: usuarioLogado
        })
    }

    render() {
        const { foto, nome } = this.state.usuario
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Jogo de Perguntas e Respostas</h1>
                    <Menu>
                        <Menu.Item><strong>Quiz</strong></Menu.Item>
                        <Menu.Item as={Link} to='/'>Home</Menu.Item>
                        <Menu.Item as={Link} to='/categorias'>Categorias</Menu.Item>
                        <Menu.Item as={Link} to='/perguntas'>Perguntas</Menu.Item>
                        <Menu.Item as={Link} to='/resultado'>Resultado</Menu.Item>
                        <Menu.Item as={Link} to='/ranking'>Ranking</Menu.Item>
                        <Menu.Menu position='right'>
                            <Menu.Item><Image avatar src={foto} /></Menu.Item>
                            <Dropdown item text={nome}>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Sair</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Menu>
                    </Menu>
                </header>
            </div>
        )
    }
}

export default Header