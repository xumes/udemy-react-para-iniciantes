import React from 'react'
import { Grid, Segment, Header, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const tamanho = {
    width: 175,
    heigth: 175
}

const Categoria = props => {
    return (
        <Grid.Column>
            <Link to={`/perguntas/${props.id}`}>
                <Segment circular style={tamanho}>
                    <Header as='h2'>
                        <Header.Subheader>
                            <Icon name={props.icone} />
                        </Header.Subheader>
                        {props.titulo}
                    </Header>
                </Segment>
            </Link>
        </Grid.Column>
    )
}

export default Categoria