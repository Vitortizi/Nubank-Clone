/* eslint-disable prettier/prettier */

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

export default function navinext() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
      <Routes />
    </NavigationContainer>
  );
}
