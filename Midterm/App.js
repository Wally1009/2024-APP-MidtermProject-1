import React from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { config } from '@gluestack-ui/config';
import Navigation from './src/navigation';

const App = () => {
  return(
  <SafeAreaProvider style={{backgroundColor:"#FFF"}}>
    <GluestackUIProvider config={config}>
      <Navigation/>
    </GluestackUIProvider>
  </SafeAreaProvider>
  )
}

export default App;