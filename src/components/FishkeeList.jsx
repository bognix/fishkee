import React from 'react'
import Card from 'material-ui/Card'
import CardHeader from 'material-ui/Card/CardHeader'
import CardText from 'material-ui/Card/CardText'


export default (props) => (
    <ul>
        {props.fishkee.map(item => (
            <Card>
                <CardHeader>Title</CardHeader>
                <CardText>Lorem Ipsum</CardText>
            </Card>
        ))}
    </ul>
)
