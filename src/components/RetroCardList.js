import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Droppable } from 'react-beautiful-dnd';

import RetroCard from './RetroCard';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    backgroundColor: '#ebecf0',
    flex: '0 0 300px',
    border: '1px solid rgb(227 229 231)',
    height: '100%'
  },
  container: {
    padding: 8,
    overflowY: 'auto',
    flex: '1 1 auto',
  },
  title: {
    padding: '4px 8px',
    fontSize: '1rem',
    boxShadow: '0px 2px 5px rgb(190 194 197)',
  }
});

const RetroCardList = (props) => {
  const { listID, title, color, cards } = props;
  const classes = useStyles();

  const retroCards = cards.map((card, index) => (
    <RetroCard
      key={card.id}
      card={card}
      listID={listID}
      color={color}
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
