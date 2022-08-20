import { ADD_QUESTIONS } from '../actions';

const INITIAL_STATE = {
  questions: [],
};

const gameReduce = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_QUESTIONS:
    return {
      ...state,
      questions: action.questions,
    };
  default:
    return state;
  }
};

export default gameReduce;
