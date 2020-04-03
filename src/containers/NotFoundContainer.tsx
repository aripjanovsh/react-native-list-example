import React from 'react';
import {Text} from 'react-native';
import {AppLayout} from '../components/layout/AppLayout';
import {Heading} from '../components/ui/Heading';

export const NotFoundContainer = () => {
  return (
    <AppLayout header={<Heading size={1}>404</Heading>}>
      <Text>...</Text>
    </AppLayout>
  );
};
