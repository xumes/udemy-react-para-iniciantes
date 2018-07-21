import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import Categoria from './Categoria'

class Categorias extends Component {
    render() {
        return (
            <div>
                <h2>Lista de Categorias</h2>
                <p>Selecione a categoria que você quer responder perguntas</p>

                <Grid columns={5} divided>
                    <Categoria />
                    <Categoria />
                    <Categoria />
                </Grid>
            </div>
        )
    }
}

export default Categorias