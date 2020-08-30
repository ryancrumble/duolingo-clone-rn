import createDataContext from '../utils/createDataContext';
import mockShopData from '../../mocks/shopData.json';
import { Language } from '../types/language';

// App level (globally used requests)
enum ActionType {
  GET_SHOP_DATA = 'GET_SHOP_DATA',
}

interface Reducer {
  type: ActionType;
  payload: any;
}

interface State {
  shopData: string;
}

const shopReducer: React.Reducer<State, Reducer> = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

/* Actions */

const fetchShopData = (dispatch: any) => (language: Language) => {
  try {
    // Fetch request (imitation)
    // e.g. axios.get('/shop', language);
    console.log('selectedLanguage: ', language);
    const mockResponse = mockShopData;
    return mockResponse;
  } catch (error) {
    console.log(error);
  }
};

export const { Provider, Context } = createDataContext(shopReducer, { fetchShopData }, []);
