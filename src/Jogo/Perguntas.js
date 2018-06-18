import React, { Component } from 'react'
import { Grid, Radio, Button, Message, Icon, Progress } from 'semantic-ui-react'
import axios from 'axios'

import Navegacao from './Navegacao'

class Perguntas extends Component {
    constructor(props) {
        super(props)

        this.state = {
            perguntas: {},
            estaCarregando: false,
            perguntaAtual: 0,
            totalPerguntas: 0
        }
    }

    componentDidMount() {
        this.carregaPerguntas(this.props.match.params.nome)
    }

    carregaPerguntas(cat) {
        console.log("categoria da pergunta:", cat)
        this.setState({
            estaCarregando: true,
            perguntas: {}
        })
        const url = `https://quiz-xumes.firebaseio.com/categorias.json?orderBy="nome"&equalTo="${cat}"`
        axios
            .get(url)
            .then(dados => {
                const chave = Object.keys(dados.data)[0]
                console.log("Lista de perguntas", dados.data[chave])
                this.setState({
                    estaCarregando: false,
                    perguntas: dados.data[chave]
                })
            })
            .catch(err => {
                console.log('Algum problema ocorreu')
            })
    }

    renderPergunta(pergunta) {
        return (
            <span >
                <h3>PERGUNTA: {pergunta.titulo}</h3>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column>
                            <Message color='yellow'>
                                <p>{pergunta.alternativas[1].resposta}</p>
                                <Radio toggle />
                            </Message>
                        </Grid.Column>
                        <Grid.Column>
                            <Message color='teal'>
                                <p>{pergunta.alternativas[2].resposta}</p>
                                <Radio toggle />
                            </Message>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Message color='pink'>
                                <p>{pergunta.alternativas[3].resposta}</p>
                                <Radio toggle />
                            </Message>
                        </Grid.Column>
                        <Grid.Column>
                            <Message color='brown'>
                                <p>{pergunta.alternativas[4].resposta}</p>
                                <Radio toggle />
                            </Message>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </span>
        )
    }

    render() {
        let item = []
        if (this.state.estaCarregando) {
            return <p>Carregando ...</p>
        }
        return (
            <div>
                <Navegacao />
                <h2><Icon name={this.state.perguntas.icone} /> {this.props.match.params.nome}</h2>
                <p>Mostre que você conhece tudo sobre este assunto</p>
                <span>

                    {
                        this.state.perguntas.perguntas && Object.keys(this.state.perguntas.perguntas)
                            .map(key => {
                                item.push(key)
                            })
                    }
                    {
                        this.state.perguntas.perguntas && this.renderPergunta(this.state.perguntas.perguntas[item[this.state.perguntaAtual]])
                        //return this.renderPergunta(this.state.perguntas.perguntas[key], key)
                    }
                    <Progress value={this.state.perguntaAtual + 1} total={item.length} progress='ratio'/>
                    <Button>Finalizar</Button>
                </span>
            </div>
        )
    }

}

export default Perguntas