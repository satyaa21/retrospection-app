import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Droppable } from 'react-beautiful-dnd';

import RetroCard from './RetroCard';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    backgroundColor: '#ebecf0',
    borderRadius: 3,
    padding: 8,
    margin: 16,
    flex: '0 0 300px',
  },
  container: {
    overflowY: 'scroll',
    maxHeight: 600,
  },
  title: {
    padding: '4px 8px'
  }
});

const RetroCardList = (props) => {
  const { listID, title, cards } = props;
  const classes = useStyles();

  const retroCards = cards.map((card, index) => (
    <RetroCard
      key={card.id}
      card={card}
      listID={listID}
      index={index}/>
  ));

  return (
    <Grid
      item
      className={classes.root}>
      <Droppable droppableId={String(listID)}>
        {(provided) => (
          <Grid
            item
            {...provided.droppableProps}
            ref={provided.innerRef}>
            <Typography
              className={classes.title}
              variant="h6"
              component="h3"
              gutterBottom>
              {title}
            </Typography>

            <Grid
              item
              className={classes.container}>
              {retroCards}
              {provided.placeholder}
            </Grid>
          </Grid>
        )}
      </Droppable>

    </Grid>
  );
};

export default RetroCardList;
