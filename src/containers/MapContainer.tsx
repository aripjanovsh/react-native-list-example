import React from 'react';
import {Text} from 'react-native';
import {AppLayout} from '../components/layout/AppLayout';
import {Heading} from '../components/ui/Heading';

export const MapContainer = () => {
  return (
    <AppLayout header={<Heading size={1}>Карта</Heading>}>
      <Text>...</Text>
    </AppLayout>
  );
};
