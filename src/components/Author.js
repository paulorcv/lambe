import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Gravatar } from 'react-native-gravatar';

const Author = props => {
  return (
    <View style={styles.container}>
      <Gravatar
        style={styles.gravatar}
        options={{ email: props.email, secure: true }}
      />
      <Text style={styles.nickname}>{props.nickname}</Text>
    </View>
  );
};

export default Author;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gravatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 15,
  },
  nickname: {
    color: '#444',
    marginVertical: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
