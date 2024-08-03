import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { DragDropContext } from 'react-beautiful-dnd';
import Grid from '@material-ui/core/Grid';

import RetroCardList from './RetroCardList';
import { sort } from '../actions';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 16px',
    backgroundColor: '#4b4b4bab'
  },
  row: {
    display: 'flex',
    alignItems: 'flex-start',
    overflowX: 'scroll',
    width: '100%',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': {
      width: 0,
      height: 0
    }
  },
  title: {
    textAlign: 'center',
    color: '#fefefe',
    padding: 16
  }
});

const Board = (props) => {
  const { board, sort } = props;
  const classes = useStyles();

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    sort(source, destination, draggableId);
  };

  const RetroList = board.lists.map(({ id, title, cards }) => (
    <RetroCardList
      key={id}
      listID={id}
      title={title}
      cards={cards}/>
  ));

  return (
    <Grid container className={classes.container}>
      <Typography
        className={classes.title}
        variant="h3"
        component="h1">
        Retro Board
      </Typography>

      <DragDropContext onDragEnd={onDragEnd}>
        <Grid item className={classes.row}>
          {RetroList}
        </Grid>
      </DragDropContext>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  board: state.board
});

const mapDispatchToProps = (dispatch) => ({
    sort: (source, destination, draggableId) => dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
    ))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Board);
