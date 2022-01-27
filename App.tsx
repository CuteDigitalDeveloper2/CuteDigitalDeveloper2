import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';

import {MainStack} from './src/navigation';
import {R} from './src/res';

export default function App() {
  return (
    <NativeBaseProvider theme={R.theme}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
