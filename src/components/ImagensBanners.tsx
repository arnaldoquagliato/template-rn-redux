import React from 'react';
import { View, Image, Text } from 'react-native';

const ImagensBanners = () => {
  return (
    <View
      style={{
        width: '85%',
        alignSelf: 'center',
      }}
    >
      <Image
        style={{
          height: 200,
          borderRadius: 20,
        }}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      />
      <Text
        style={{
          paddingHorizontal: '15%',
          bottom: '21%',
          color: '#fff',
          backgroundColor: '#000',
          opacity: 0.7,
          height: 55,
          alignSelf: 'center',
          paddingTop: 5,
          borderRadius: 20,
          paddingLeft: '3%',
        }}
      >
        Alunos do Etapa tem nota máxima em redação no ENEM
      </Text>
    </View>
  );
};

export default ImagensBanners;
