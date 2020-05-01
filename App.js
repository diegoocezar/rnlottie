import React from 'react';
import {View, ScrollView, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';

import animation2 from './source/animation2.json';
import animation3 from './source/animation3.json';
import booksFalling from './source/booksFalling.json';
import illustration from './source/illustration.json';
import laptop from './source/laptop.json';
import run from './source/run.json';

// import { Container } from './styles';

export default function App() {
  const {width, height} = Dimensions.get('window');

  const animations = [
    animation2,
    animation3,
    booksFalling,
    illustration,
    laptop,
    run,
  ];
  return (
    <View
      style={{
        flex: 1,
        marginTop: width / 2,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ScrollView horizontal>
        {animations.map((animation, index) => (
          <LottieView
            key={index}
            source={animation}
            style={{width: width}}
            autoPlay
            loop
          />
        ))}
      </ScrollView>
    </View>
  );
}
