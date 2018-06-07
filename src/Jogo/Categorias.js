import React, { Component } from 'react'
import { Grid, Segment, Header, Icon } from 'semantic-ui-react'

const tamanho = {
    width: 175,
    heigth: 175
}

class Categorias extends Component {
    render() {
        return (
            <div>
                <h2>Lista de Categorias</h2>
                <p>Selecione a categoria que você quer responder perguntas</p>

                <Grid columns={5} divided>
                    <Grid.Row>
                        <Grid.Column>
                            <Segment circular style={tamanho}>
                                <Header as='h2'>
                                    Esportes
                                    <Header.Subheader>
                                    <Icon name='trophy' />
                                    </Header.Subheader>
                                </Header>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment circular style={tamanho}>
                                <Header as='h2'>
                                    Música
                                    <Header.Subheader>
                                    <Icon name= 'music' />
                                    </Header.Subheader>
                                </Header>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment circular style={tamanho}>
                                <Header as='h2'>
                                    Mundo
                                    <Header.Subheader>
                                    <Icon name='globe' />
                                    </Header.Subheader>
                                </Header>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment circular style={tamanho}>
                                <Header as='h2'>
                                    Mundo
                                    <Header.Subheader>
                                    <Icon name='globe' />
                                    </Header.Subheader>
                                </Header>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment circular style={tamanho}>
                                <Header as='h2'>
                                    Mundo
                                    <Header.Subheader>
                                    <Icon name='globe' />
                                    </Header.Subheader>
                                </Header>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column>
                    <Segment circular style={tamanho}>
                        <Header as='h2'>
                            Esportes
                            <Header.Subheader>
                            <Icon name='trophy' />
                            </Header.Subheader>
                        </Header>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment circular style={tamanho}>
                        <Header as='h2'>
                            Música
                            <Header.Subheader>
                            <Icon name= 'music' />
                            </Header.Subheader>
                        </Header>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment circular style={tamanho}>
                        <Header as='h2'>
                            Mundo
                            <Header.Subheader>
                            <Icon name='globe' />
                            </Header.Subheader>
                        </Header>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment circular style={tamanho}>
                        <Header as='h2'>
                            Mundo
                            <Header.Subheader>
                            <Icon name='globe' />
                            </Header.Subheader>
                        </Header>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment circular style={tamanho}>
                        <Header as='h2'>
                            Mundo
                            <Header.Subheader>
                            <Icon name='globe' />
                            </Header.Subheader>
                        </Header>
                    </Segment>
                </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Categorias