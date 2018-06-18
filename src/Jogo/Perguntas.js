import React, { Component } from 'react'
import { Grid, Radio, Button, Message, Icon, Progress } from 'semantic-ui-react'
import axios from 'axios'
import _ from 'lodash'

import Navegacao from './Navegacao'

class Perguntas extends Component {
    constructor(props) {
        super(props)

        this.state = {
            perguntas: {},
            estaCarregando: false,
            perguntaAtual: 0,
            totalPerguntas: 0,
            resposta: {},
            pontos:0
        }

        this.proximaPergunta = this.proximaPergunta.bind(this)
        this.onRadioChange = this.onRadioChange.bind(this)
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
                const listaDePerguntas = dados.data[chave]
                console.log("Lista de perguntas", listaDePerguntas)
                console.log("Quantidade de perguntas", _.size(listaDePerguntas))
                this.setState({
                    estaCarregando: false,
                    perguntas: listaDePerguntas,
                    totalPerguntas: _.size(listaDePerguntas)
                })
            })
            .catch(err => {
                console.log('Algum problema ocorreu')

            })
    }

    proximaPergunta() {
        const { perguntaAtual, totalPerguntas } = this.state
        console.log(perguntaAtual, totalPerguntas)
        if (perguntaAtual < totalPerguntas - 1) {
            this.setState({ perguntaAtual: this.state.perguntaAtual + 1 })
        } else {
            console.log("Terminou as perguntas, mostre as respostas")
            console.log("PONTUAÇÃO: ", this.state.pontos)
        }
    }

    onRadioChange = (e, { resposta, name }) => {
        this.setState({ resposta })

        const respostaJogador = resposta
        const respostaCorreta = _.filter(this.state.perguntas.perguntas[name].alternativas, { 'correta': true })[0].resposta
        const acertou = (respostaJogador === respostaCorreta)
        console.log("a resposta do jogador", resposta)
        console.log("pergunta atual", this.state.perguntaAtual)
        console.log("a alternativa correta", _.filter(this.state.perguntas.perguntas[name].alternativas, { 'correta': true })[0].resposta)
        console.log("Acertou?", acertou)
        if (acertou) {
            this.setState({pontos: this.state.pontos + 1})
        }
    }

    renderPergunta(pergunta, id) {
        return (
            <span >
                <h3>PERGUNTA: {pergunta.titulo}</h3>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column>
                            <Message color='yellow'>
                                <p>{pergunta.alternativas[1].resposta}</p>
                                <Radio
                                    toggle
                                    name={id}
                                    resposta={pergunta.alternativas[1].resposta}
                                    checked={this.state.resposta === pergunta.alternativas[1].resposta}
                                    onChange={this.onRadioChange}
                                />
                            </Message>
                        </Grid.Column>
                        <Grid.Column>
                            <Message color='teal'>
                                <p>{pergunta.alternativas[2].resposta}</p>
                                <Radio
                                    toggle
                                    name={id}
                                    resposta={pergunta.alternativas[2].resposta}
                                    checked={this.state.resposta === pergunta.alternativas[2].resposta}
                                    onChange={this.onRadioChange}
                                />
                            </Message>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Message color='pink'>
                                <p>{pergunta.alternativas[3].resposta}</p>
                                <Radio
                                    toggle
                                    name={id}
                                    resposta={pergunta.alternativas[3].resposta}
                                    checked={this.state.resposta === pergunta.alternativas[3].resposta}
                                    onChange={this.onRadioChange}
                                />
                            </Message>
                        </Grid.Column>
                        <Grid.Column>
                            <Message color='brown'>
                                <p>{pergunta.alternativas[4].resposta}</p>
                                <Radio
                                    toggle
                                    name={id}
                                    resposta={pergunta.alternativas[4].resposta}
                                    checked={this.state.resposta === pergunta.alternativas[4].resposta}
                                    onChange={this.onRadioChange}
                                />
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
                        this.state.perguntas.perguntas && this.renderPergunta(this.state.perguntas.perguntas[item[this.state.perguntaAtual]], item[this.state.perguntaAtual])
                        //return this.renderPergunta(this.state.perguntas.perguntas[key], key)
                    }
                    <Progress value={this.state.perguntaAtual + 1} total={item.length} progress='ratio' />
                    <Button onClick={this.proximaPergunta}>Próxima</Button>
                </span>
            </div>
        )
    }

}

export default Perguntas