import React from 'react';
import {AppLayout} from '../components/layout/AppLayout';
import {SearchList} from '../components/search/SearchList';

export const SearchContainer = () => {
  return (
    <AppLayout>
      <SearchList />
    </AppLayout>
  );
};
