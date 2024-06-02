import React from 'react';
import { Provider } from "react-redux";
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { config } from '@gluestack-ui/config';
import Navigation from './src/navigation';
import { FavoriteProvider } from './src/Context/FavoriteContext';
import { CartProvider } from './src/Context/CartContext';
import { store } from './src/redux/store';

const App = () => {
  return(
  <SafeAreaProvider style={{backgroundColor:"#FFF"}}>
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <GluestackUIProvider config={config}>
          <FavoriteProvider>
            <CartProvider>
            <Navigation/>
            </CartProvider>
          </FavoriteProvider>
        </GluestackUIProvider>
      </Provider>
    </SafeAreaView>
  </SafeAreaProvider>
  )
}

export default App;