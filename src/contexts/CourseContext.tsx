import createDataContext from '../utils/createDataContext';
import mockCourseData from '../../mocks/courseData/DE.json';
import { Language } from '../types/language';

// App level (globally used requests)
enum ActionType {
  GET_COURSE_DATA = 'GET_COURSE_DATA',
}

interface Reducer {
  type: ActionType;
  payload: any;
}

interface State {
  courseData: {} | null;
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

const fetchCourseData = (dispatch: any) => (language: Language) => {
  try {
    // Fetch request (imitation)
    // e.g. axios.get('/course', language);
    console.log('selectedLanguage: ', language);
    const mockResponse = mockCourseData;

    dispatch({ type: ActionType.GET_COURSE_DATA, payload: mockResponse });
  } catch (error) {
    console.log(error);
  }
};

export const { Provider, Context } = createDataContext(appReducer, { fetchCourseData }, [{ courseData: null }]);
