import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  bgRed: {
    backgroundColor: 'red',
  },
});

// RN 如何绑定样式
const Style1 = () => {
  return (
    <>
      {/* 支持对象 */}
      <View style={{backgroundColor: 'red'}}>
        <Text>1</Text>
      </View>

      {/* 支持数组 */}
      {/* 注意: 后面的同名属性会覆盖前面的 */}
      <View style={[{backgroundColor: 'red'}, {backgroundColor: 'blue'}]}>
        <Text>2</Text>
      </View>

      {/* 绑定 StyleSheet API 创建的样式对象 */}
      <View style={styles.bgRed}>
        <Text>3</Text>
      </View>
      <View style={[styles.bgRed]}>
        <Text>3</Text>
      </View>
    </>
  );
};

export default Style1;
