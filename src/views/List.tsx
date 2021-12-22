import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../domain/state/user/';
import { State } from '../domain/state/state/store-factory';
import { UserListState } from '../types/domain';

export function List() {
  const user = useSelector((state: State) => state.users);
  console.log(user.users);
  const dispatch = useDispatch();
  const { removeUser } = bindActionCreators(actionCreators, dispatch);

  return (
    <FlatList
      data={user.users}
      renderItem={({ item }: { item: any }) => (
        <TouchableOpacity
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
          <Text>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
}
