import React from 'react'
import {Card, Button} from 'semantic-ui-react'

const Inicio = props => {
    return (
        <Card>
            <Card.Header>
                Quiz
            </Card.Header>
            <Card.Meta>
                Jogo de Perguntas e Respostas
            </Card.Meta>
            <Card.Content>
                Desafie os seus amigos neste incrível jogo de perguntas e respostas. Basta acessar com sua conta do Facebook.
            </Card.Content>
            <Card.Content>
                <Button>Login com Facebook</Button>
                <Button>Usuário Administrativo</Button>
            </Card.Content>
        </Card>
    )
}

export default Inicio