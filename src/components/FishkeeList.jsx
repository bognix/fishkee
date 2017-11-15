import React from 'react'
import Card, { CardContent, CardHeader } from 'material-ui/Card';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';


export default ({fishkee, onAddButtonClick}) => (
    <div>
        <ul>
            {fishkee.map((item, index) => (
                <Card key={index}>
                    <CardHeader title="Bla Bla"/>
                    <CardContent>Lorem Ipsum</CardContent>
                </Card>
            ))}
        </ul>,
        <Button fab color="primary" aria-label="add" onClick={onAddButtonClick}>
            <AddIcon />
        </Button>
      </div>
)
