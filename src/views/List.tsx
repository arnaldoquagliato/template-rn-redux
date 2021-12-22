import React from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { State } from '../domain/state/state/store-factory';
import { actionCreators } from '../domain/state/user';

export function List() {
  const user = useSelector((state: State) => state.users);
  const dispatch = useDispatch();
  const { removeUser } = bindActionCreators(actionCreators, dispatch);

  return (
    <FlatList
      data={user.users}
      renderItem={({ item }: { item: any }) => {
        const { name, id } = item;
        return (
          <TouchableOpacity
            key={id}
            style={{
              marginVertical: 5,
              backgroundColor: '#b8b4a9',
              width: '80%',
              height: 50,
              borderRadius: 15,
              alignItems: 'center',
              marginLeft: '10%',
            }}
            onPress={() => removeUser(item)}
          >
            <Text style={{ marginTop: 10 }}>{name}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
}
