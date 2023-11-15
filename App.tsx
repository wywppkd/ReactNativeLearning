/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Style1 from './pages/style/Style1';
import Style2 from './pages/style/Style2';

function App(): JSX.Element {
  return (
    // <SafeAreaView> 安全区域视图, 自动避开刘海和触控条区域
    <SafeAreaView>
      {/* <Style1 /> */}
      <Style2 />
    </SafeAreaView>
  );
}

export default App;
