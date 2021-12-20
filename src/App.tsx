import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state/index";
function Home() {
  const account = useSelector((state: State) => state.account)
  const dispatch = useDispatch()


  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch)

  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 40
        }}
      >
        <TouchableOpacity
          style={{
            marginRight: 10,
            backgroundColor: 'red',
            height: 50,
            width: 100,
          }}
          onPress={() => depositMoney(10)}
        >
          <Text
            style={{ textAlign: 'center', marginTop: 10 }}
          >Increase</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            height: 50,
            width: 100,
          }}
          onPress={() => withdrawMoney(10)}
        >
          <Text style={{ textAlign: 'center', marginTop: 10 }}>Descrease</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            height: 50,
            width: 100,
          }}
          onPress={() => bankrupt()}
        >
          <Text style={{ textAlign: 'center', marginTop: 10 }}>bancrupt</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{ textAlign: 'center' }}
      >Valor: {account}</Text>
    </View>
  );
}

export default Home;
