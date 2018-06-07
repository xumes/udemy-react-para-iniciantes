import React from 'react'
import { Grid, Segment, Header, Icon } from 'semantic-ui-react'

const tamanho = {
    width: 175,
    heigth: 175
}

const Categoria = props => {
    return (
        <Grid.Column>
            <Segment circular style={tamanho}>
                <Header as='h2'>
                    <Header.Subheader>
                        <Icon name={props.icone} />
                    </Header.Subheader>
                    {props.titulo}
                </Header>
            </Segment>
        </Grid.Column>
    )
}

export default Categoria