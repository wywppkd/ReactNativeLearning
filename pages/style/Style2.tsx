import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Style2 = () => {
  const styles = StyleSheet.create({
    red: {
      backgroundColor: 'red',
      red: 'red',
    },
  });

  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{width: '25%', backgroundColor: 'red'}}>
        <Text>头像</Text>
      </View>
      <View style={{width: '25%', backgroundColor: 'blue'}}>
        <Text>出行</Text>
      </View>
      <View style={{width: '25%', backgroundColor: 'gray'}}>
        <Text>扫一扫</Text>
      </View>
      <View style={{width: '25%', backgroundColor: 'black'}}>
        <Text>扫一扫</Text>
      </View>
    </View>
  );
};

export default Style2;
