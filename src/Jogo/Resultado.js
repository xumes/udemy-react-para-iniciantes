import React, { Component } from 'react'
import { List, Container } from 'semantic-ui-react'

import Resposta from './Resposta'
import Navegacao from './Navegacao'

const resposta = {
    id: 1,
    titulo: 'Primeira Pergunta',
    alternativa: 3
}

class Resultado extends Component {
    render() {
        return (
            <div>
            <Navegacao />
                <h2>Seus resultados</h2>
                {JSON.stringify(this.props.location.state)}
                <p>Confira o seu desempenho nesta categoria</p>
                <Container>
                    <List divided>
                        <Resposta resposta={resposta}/>
                    </List>
                </Container>
            </div>
        )
    }
}


export default Resultado