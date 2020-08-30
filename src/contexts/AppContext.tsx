import createDataContext from '../utils/createDataContext';

// App level (globally used requests)
enum ActionType {
  ADD_ERROR = 'ADD_ERROR',
  CLEAR_ERROR_MESSAGE = 'CLEAR_ERROR_MESSAGE',
}

interface Reducer {
  type: ActionType;
  payload: any;
}

interface State {
  errorMessage: string;
}

const appReducer: React.Reducer<State, Reducer> = (state, action) => {
  switch (action.type) {
    case ActionType.ADD_ERROR:
      return { ...state, errorMessage: action.payload };
    case ActionType.CLEAR_ERROR_MESSAGE:
      return { ...state, errorMessage: '' };
    default:
      return state;
  }
};

/* Actions */

const clearErrorMessage = (dispatch: any) => () => {
  dispatch({ type: ActionType.CLEAR_ERROR_MESSAGE });
};

const addErrorMessage = (dispatch: any) => () => {
  try {
    dispatch({ type: ActionType.ADD_ERROR });
  } catch (error) {
    console.log(error);
  }
};

export const { Provider, Context } = createDataContext(appReducer, { clearErrorMessage, addErrorMessage }, [
  { errorMessage: '' },
]);
