import React from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { config } from '@gluestack-ui/config';
import Navigation from './src/navigation';

const App = () => {
  return(
  <SafeAreaProvider style={{backgroundColor:"#FFF"}}>
    <SafeAreaView style={{flex: 1}}>
      <GluestackUIProvider config={config}>
        <Navigation/>
      </GluestackUIProvider>
    </SafeAreaView>
  </SafeAreaProvider>
  )
}

export default App;