import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { Draggable } from 'react-beautiful-dnd';

const useStyles = makeStyles({
  root: {
    marginBottom: 8,
    transition: 'all .4s',
    boxShadow: '4px 6px 5px 0px rgba(0,0,0,0.2)',
  },
  redCard: {
    borderLeft: '4px solid red',
  },
  greenCard: {
    borderLeft: '4px solid green',
  },
  blueCard: {
    borderLeft: '4px solid blue',
  },
  orangeCard: {
    borderLeft: '4px solid orange',
  },
  title: {
    fontWeight: 'bold',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
  }
});

const RetroCard = (props) => {
  const { card, index, color } = props;
  const classes = useStyles();

  return (
    <Grid item>
      <Draggable
        draggableId={String(card.id)}
        index={index}>
        {(provided) => (
          <Grid
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
            <Card className={`${classes.root} ${classes[color+'Card']}`}>
              <CardContent>


                <Typography
                  variant="body2"
                  component="p">
                  {card.text}
                </Typography>
              </CardContent>

              <CardActions className={classes.buttons}>
                <Button
                  color="primary"
                  size="small"
                  startIcon={<EditIcon/>}>
                  Edit
                </Button>

                <Button
                  color="secondary"
                  size="small"
                  startIcon={<DeleteIcon/>}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        )}
      </Draggable>

    </Grid>
  );
};

export default RetroCard;
