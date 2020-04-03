import {SearchApi} from '../api/SearchApi';

export enum SearchReducerActions {
  PerformRequestSearch = 'Auth/PerformRequestSearch',
  FulfillRequestSearch = 'Auth/FulfillRequestSearch',
  RejectRequestSearch = 'Auth/RejectRequestSearch',
}

export interface SearchReducerState {
  search: {
    isFetching: boolean;
    payload: object | null;
    error: string | null;
  };
}

const initialState: SearchReducerState = {
  search: {
    isFetching: false,
    payload: null,
    error: null,
  },
};

export const searchReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SearchReducerActions.PerformRequestSearch:
      return {...state, search: {isFetching: true, payload: null, error: null}};
    case SearchReducerActions.FulfillRequestSearch:
      return {...state, search: {isFetching: false, payload, error: null}};
    case SearchReducerActions.RejectRequestSearch:
      return {
        ...state,
        search: {isFetching: false, payload: null, error: payload},
      };
    default:
      return state;
  }
};

function performRequestSearch() {
  return {type: SearchReducerActions.PerformRequestSearch};
}
function fulfillRequestSearch(payload) {
  return {type: SearchReducerActions.FulfillRequestSearch, payload};
}
function rejectRequestSearch(payload) {
  return {type: SearchReducerActions.RejectRequestSearch, payload};
}
const api = new SearchApi();
export const fetchSearch = () => (dispatch) => {
  dispatch(performRequestSearch());
  api
    .search()
    .then((payload) => dispatch(fulfillRequestSearch(payload)))
    .catch((e) => dispatch(rejectRequestSearch(e)));
};
