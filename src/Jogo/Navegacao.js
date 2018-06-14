import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Image, Dropdown, Icon } from 'semantic-ui-react'
import firebase from 'firebase'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            usuario: '',
            estaLogado: false
        }
    }

    componentDidMount() {
        const usuarioLogado = {
            nome: localStorage.getItem('nome'),
            foto: localStorage.getItem('foto')
        }



        this.setState({
            usuario: usuarioLogado,
            estaLogado: !!localStorage.getItem('nome')
        })
    }

    deslogarUsuario() {
        firebase
            .auth()
            .signOut()
            .then(() => {
                localStorage.removeItem('nome')
                localStorage.removeItem('foto')
                this.setState({
                    usuario: '',
                    estaLogado: false
                })
            })
            .catch(err => {
                console.log('Erro ao deslogar o usuário')
            })
    }

    render() {
        const { foto, nome } = this.state.usuario
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Jogo de Perguntas e Respostas {JSON.stringify(this.state.estaLogado)}</h1>
                    <Menu>
                        <Menu.Item><strong>Quiz</strong></Menu.Item>
                        <Menu.Item as={Link} to='/'>Home</Menu.Item>
                        <Menu.Item as={Link} to='/categorias'>Categorias</Menu.Item>
                        <Menu.Item as={Link} to='/perguntas'>Perguntas</Menu.Item>
                        <Menu.Item as={Link} to='/resultado'>Resultado</Menu.Item>
                        <Menu.Item as={Link} to='/ranking'>Ranking</Menu.Item>
                        <Menu.Menu position='right'>

                            {
                                this.state.estaLogado &&
                                <span>
                                    <Menu.Item><Image avatar src={foto} /></Menu.Item>
                                    <Dropdown item text={nome}>
                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={this.deslogarUsuario}>Sair</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </span>

                            }

                            {
                                !this.state.estaLogado &&
                                <Menu.Item><Icon name='user' /></Menu.Item>
                            }

                        </Menu.Menu>



                    </Menu>
                </header>
            </div>
        )
    }
}

export default Header