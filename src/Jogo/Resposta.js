import React from 'react'
import { List, Label, Icon } from 'semantic-ui-react'

const Resposta = props => {
    const { pergunta, resposta, acertou, key } = props
    return (
        <List.Item key={key}>
            <List.Content floated='left'>
                <Label>
                    *
                </Label>
                {pergunta}
            </List.Content>
            <List.Content floated='right'>
                {acertou && <Icon name='thumbs up outline' />}
                {!acertou && <Icon name='thumbs down outline' />}
            </List.Content>
            <List.Content floated='right'>
                {resposta}
            </List.Content>

        </List.Item>
    )
}

export default Resposta
