import {ReducersMapObject, combineReducers} from 'redux';
import {appReducer, AppReducerState} from '../reducers/AppReducer';
import {searchReducer, SearchReducerState} from '../reducers/SearchReducer';

export interface AppStoreState {
  app: AppReducerState;
  search: SearchReducerState;
}

const reducers: ReducersMapObject<AppStoreState> = {
  app: appReducer,
  search: searchReducer,
};

export const rootReducer = combineReducers(reducers);
