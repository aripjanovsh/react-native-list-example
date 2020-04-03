import {AppEnv} from '../helpers/AppUtils';

export interface AppReducerState {
  env: AppEnv;
}

const initialState: AppReducerState = {
  env: 'development',
};

export const appReducer = (state = initialState, action) => {
  return state;
};
