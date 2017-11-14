import React from 'react'
import Card from 'material-ui/Card'
import CardHeader from 'material-ui/Card/CardHeader'
import CardText from 'material-ui/Card/CardText'
import Button from 'material-ui/FloatingActionButton';
import AddIcon from 'material-ui-icons/Add';


export default ({fishkee, onAddButtonClick}) => (
    <div>
        <ul>
            {fishkee.map(item => (
                <Card>
                    <CardHeader>Title</CardHeader>
                    <CardText>Lorem Ipsum</CardText>
                </Card>
            ))}
        </ul>,
        <Button fab color="primary" aria-label="add" onClick={onAddButtonClick}>
            <AddIcon />
        </Button>
      </div>
)
