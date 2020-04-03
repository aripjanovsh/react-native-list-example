import React from 'react';
import {Redirect, Route, Switch} from 'react-router-native';
import {MapContainer} from './MapContainer';
import {RootRoute} from '../constants/RouteConstants';
import {SearchContainer} from './SearchContainer';
import {PromotionContainer} from './PromotionContainer';
import {ProfileContainer} from './ProfileContainer';
import {NotFoundContainer} from './NotFoundContainer';

export const RootContainer = () => {
  return (
    <Switch>
      <Route path={RootRoute.Map} component={MapContainer} />

      <Route path={RootRoute.Search} component={SearchContainer} />

      <Route path={RootRoute.Promotion} component={PromotionContainer} />

      <Route path={RootRoute.Profile} component={ProfileContainer} />

      <Redirect exact={true} from="/" to={RootRoute.Search} />

      <Route component={NotFoundContainer} />
    </Switch>
  );
};
