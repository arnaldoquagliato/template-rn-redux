import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
  const account = useSelector((state: any) => state.account)
  const dispatch = useDispatch()


  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch)

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
      </View>
      <Text
        style={{ textAlign: 'center' }}
      >Valor: {account}</Text>
    </View>
  );
}

export default App;
