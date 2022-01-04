import React, { useState } from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import { CardNotification, ImageNotificationList } from './Components';
const mock = [
  {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'Noticia 1',
    describe:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'Noticia 2',
    describe:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'Noticia 3',
    describe:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'Noticia 4',
    describe:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

function ListNotification() {
  return (
    <View
      style={{
        justifyContent: 'center',
        marginTop: 10,
        alignSelf: 'center',
      }}
    >
      <FlatList
        data={mock}
        renderItem={({ item }) => {
          const { uri, describe, title } = item;
          return (
            <CardNotification>
              <ImageNotificationList
                source={{
                  uri: uri,
                }}
              />
              <View
                style={{
                  marginLeft: 10,
                  width: '90%',
                  flexDirection: 'row',
                }}
              >
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'black',
                      marginTop: 5,
                      fontSize: 16,
                    }}
                  >
                    {title}
                  </Text>
                  <Text
                    ellipsizeMode='tail'
                    numberOfLines={3}
                    style={{
                      fontSize: 10,
                      marginTop: 5,
                      width: 200,
                    }}
                  >
                    {describe}
                  </Text>
                </View>
                <Text
                  style={{
                    color: '#FFCC00',
                    alignSelf: 'center',
                  }}
                >
                  {'>'}
                </Text>
              </View>
            </CardNotification>
          );
        }}
      />
    </View>
  );
}

export default ListNotification;
