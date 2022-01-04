import React from 'react';
import { TouchableOpacity } from 'react-native';

interface Button {
  onPress: () => void;
  children: any;
}

const YellowButton = ({ children, onPress }: Button) => {
  return (
    <TouchableOpacity
      style={{
        width: '90%',
        backgroundColor: '#FFCC00',
        borderRadius: 40,
        alignSelf: 'center',
        alignItems: 'center',
        height: 60,
        justifyContent: 'center',
      }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

export default YellowButton;
