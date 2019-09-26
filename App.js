import React, { Component } from 'react';
import Header from './src/components/Header';
import { View, Text } from 'react-native';
import Post from './src/components/Post';

export default class App extends Component {
  render() {
    const comments = [
      {
        nickname: 'paulorcv',
        comment: 'Boa foto!',
      },
      {
        nickname: 'thaiz',
        comment: 'Gostoso!',
      },
      {
        nickname: 'paulorcv',
        comment: 'Gostosa!',
      },
      {
        nickname: 'thaiz',
        comment: 'me come!',
      },
    ];

    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')} comments={comments} />
      </View>
    );
  }
}
