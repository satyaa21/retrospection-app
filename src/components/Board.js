import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { DragDropContext } from 'react-beautiful-dnd';
import Grid from '@material-ui/core/Grid';

import RetroCardList from './RetroCardList';
import { sort } from '../actions';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column'
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

  const RetroList = board.lists.map(({ id, title, color, cards }) => (
    <RetroCardList
      key={id}
      listID={id}
      title={title}
      color={color}
      cards={cards}/>
  ));

  return (
    <Grid container className={classes.container}>
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
