import React from 'react';
import { Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators, State } from '../state/index';

export function Teste() {
  const account = useSelector((state: State) => state.account);
  return (
    <View>
      <Text>TESTEAMDP: {account}</Text>
    </View>
  );
}
