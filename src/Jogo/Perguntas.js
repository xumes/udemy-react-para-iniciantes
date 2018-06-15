import React, { Component } from 'react'
import { Grid, Radio, Button, Message } from 'semantic-ui-react'
import axios from 'axios'

import Navegacao from './Navegacao'

class Perguntas extends Component {
    constructor(props){
        super(props)

        this.state = {
            perguntas: {},
            estaCarregando: false
        }

        this.carregaPerguntas(this.props.match.params.idCat)
    }

    carregaPerguntas(id){
        console.log("id da pergunta:", id)
        this.setState({
            estaCarregando: true,
            perguntas: {}
        })
        const url=`https://quiz-xumes.firebaseio.com/categorias/${id}`
        axios
            .get(url)
            .then(dados =>{
                console.log("Lista de perguntas", dados)
            })
            .catch(err => {
                console.log('Algum problema ocorreu')
            })

    }

    render() {
        return (
            <div>
                <Navegacao />
                <h2>Titulo da categoria</h2>
                <p>Mostre que você conhece tudo sobre este assunto</p>

                <span>
                    <h3>PERGUNTA: Qual a profissão bla bla bla</h3>
                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                <Message color='yellow'>
                                    <p>Alternativa 1</p>
                                    <Radio toggle />
                                </Message>
                            </Grid.Column>
                            <Grid.Column>
                                <Message color='teal'>
                                    <p>Alternativa 2</p>
                                    <Radio toggle />
                                </Message>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Message color='pink'>
                                    <p>Alternativa 3</p>
                                    <Radio toggle />
                                </Message>
                            </Grid.Column>
                            <Grid.Column>
                                <Message color='brown'>
                                    <p>Alternativa 4</p>
                                    <Radio toggle />
                                </Message>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Button>Finalizar</Button>
                </span>
            </div>
        )
    }

}

export default Perguntas