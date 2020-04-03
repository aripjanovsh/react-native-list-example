import {Store, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {AppStoreState, rootReducer} from './RootReducer';

export type AppStore = Store<AppStoreState>;

export function configureStore(): {
  store: AppStore;
} {
  const store: AppStore = createStore(rootReducer, applyMiddleware(thunk));

  return {store};
}
