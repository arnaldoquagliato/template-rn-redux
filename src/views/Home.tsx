import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../domain/state/user';
import { List } from './List';

function Home() {
  const dispatch = useDispatch();
  const { addUser } = bindActionCreators(actionCreators, dispatch);

  const [username, setUsername] = useState('');

  const handleInput = () => {
    setUsername('');
    addUser({
      name: username,
      id: 0,
    });
  };
  return (
    <View>
      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <TextInput
          onChangeText={setUsername}
          style={{
            width: '80%',
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 15,
            textAlign: 'center',
          }}
          value={username}
        />
        <TouchableOpacity
          style={{
            marginVertical: 30,
            backgroundColor: '#b8b4a9',
            width: '80%',
            height: 50,
            borderRadius: 15,
          }}
          onPress={() => handleInput()}
        >
          <Text
            style={{
              textAlign: 'center',
              textAlignVertical: 'center',
              marginTop: 13,
            }}
          >
            + USUÁRIO
          </Text>
        </TouchableOpacity>
      </View>
      <List />
    </View>
  );
}

export default Home;
