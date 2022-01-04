import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import ImagensBanners from './ImagensBanners';
import Carousel from 'react-native-snap-carousel';

const { width } = Dimensions.get('window');

const Carrousel: React.FC = () => {
  const teste = [1, 2, 3];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View>
      <Carousel
        data={teste}
        sliderWidth={width - 20}
        itemWidth={width}
        renderItem={() => <ImagensBanners />}
        onSnapToItem={(item) => setActiveIndex(item)}
      />
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          alignSelf: 'center',
        }}
      >
        {teste.map((index) => {
          return (
            <View
              key={index}
              style={{
                height: 5,
                width: activeIndex + 1 === index ? 45 : 10,
                backgroundColor: '#132675',
                borderRadius: 40,
                marginRight: 5,
                bottom: '5%',
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Carrousel;
