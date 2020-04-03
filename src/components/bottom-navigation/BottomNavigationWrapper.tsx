import React from 'react';
import {Route} from 'react-router';
import {BottomNavigation} from './BottomNavigation';

export const BottomNavigationWrapper = () => {
  return (
    <Route
      render={({history, location}) => (
        <BottomNavigation history={history} location={location} />
      )}
    />
  );
};
