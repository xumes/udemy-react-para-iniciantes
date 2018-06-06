import React from 'react'
import { Container, Header, Segment, Card, Button } from 'semantic-ui-react'

const Inicio = props => {
    return (
        <div>
            <Container>
                <Segment piled>
                    Quiz
                </Segment>
                <Header as='h2'>
                    Jogo de Perguntas e Respostas
                </Header>
                <p>
                    Desafie os seus amigos neste incrível jogo de perguntas e respostas. Basta acessar com sua conta do Facebook.
                </p>
                <Card fluid>
                    <Card.Content>
                        Acesse agora mesmo
                    </Card.Content>
                    <Card.Content>
                        <Button basic color='blue'>Login com Facebook</Button>
                        <Button basic color='green'>Usuário Administrativo</Button>
                    </Card.Content>
                </Card>

            </Container>


        </div>
    )
}

export default Inicio