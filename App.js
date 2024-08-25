import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import CartProvider from './src/contexts/CartContext';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <StatusBar backgroundColor="#FAFAFA" barStyle="dark-content" />
        <Routes/>
      </CartProvider>
    </NavigationContainer>
  );
}