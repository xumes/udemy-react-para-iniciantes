import React, { Component } from 'react'
import { List, Container } from 'semantic-ui-react'

import Resposta from './Resposta'
import Header from './Header'

const resposta = {
    id: 1,
    titulo: 'Primeira Pergunta',
    alternativa: 3
}

class Resultado extends Component {
    render() {
        return (
            <div>
            <Header />
                <h2>Seus resultados</h2>
                <p>Confira o seu desempenho nesta categoria</p>
                <Container>
                    <List divided verticalAlign='left'>
                        <Resposta resposta={resposta}/>
                    </List>
                </Container>
            </div>
        )
    }
}


export default Resultado