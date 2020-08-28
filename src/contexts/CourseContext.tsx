import createDataContext from '../utils/createDataContext';

// App level (globally used requests)
enum ActionType {
  GET_COURSE_DATA = 'GET_COURSE_DATA',
}

interface Reducer {
  type: ActionType;
  payload: any;
}

interface State {
  courseData: {};
}

const appReducer: React.Reducer<State, Reducer> = (state, action) => {
  switch (action.type) {
    case ActionType.GET_COURSE_DATA:
      return { ...state, courseData: action.payload };
    default:
      return state;
  }
};

/* Actions */

const fetchCourseData = (dispatch: any) => () => {
  try {
    dispatch({ type: ActionType.GET_COURSE_DATA });
  } catch (error) {
    console.log(error);
  }
};

export const { Provider, Context } = createDataContext(appReducer, { fetchCourseData }, [{ courseData: null }]);
