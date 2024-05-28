import React from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { config } from '@gluestack-ui/config';
import Navigation from './src/navigation';
import { FavoriteProvider } from './src/Context/FavoriteContext';
import { CartProvider } from './src/Context/CartContext';

const App = () => {
  return(
  <SafeAreaProvider style={{backgroundColor:"#FFF"}}>
    <SafeAreaView style={{flex: 1}}>
      <GluestackUIProvider config={config}>
        <FavoriteProvider>
          <CartProvider>
          <Navigation/>
          </CartProvider>
        </FavoriteProvider>
      </GluestackUIProvider>
    </SafeAreaView>
  </SafeAreaProvider>
  )
}

export default App;