import React from 'react';
import {Provider} from 'react-redux';
import {BackButton, NativeRouter, Route} from 'react-router-native';
import {configureStore} from '../core/configureStore';
import {AppErrorBoundary} from '../components/AppErrorBoundary';
import {RootContainer} from './RootContainer';

const {store} = configureStore();

export const AppContainer = () => {
  return (
    <AppErrorBoundary>
      <Provider store={store}>
        <NativeRouter>
          <Route render={(renderProps) => <RootContainer {...renderProps} />} />
        </NativeRouter>
      </Provider>
    </AppErrorBoundary>
  );
};
