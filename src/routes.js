import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './pages/home_page';
import ObdPage  from './pages/obd2_page';
import InfoPage from './pages/info_page';
import PontosPage from './pages/pontos_page';
import PlanoPage from './pages/plano_page';
import BuyPage from './pages/buy_page';
import AlertPage from './pages/alert_page';
import InputPage from './pages/input_page';

const Stack = createStackNavigator();

export function RoutesPage() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} options={{headerShown: false}}/>
        <Stack.Screen name="ObdPage" component={ObdPage} options={{headerShown: false}}/> 
        <Stack.Screen name="InfoPage" component={InfoPage} options={{headerShown: false}}/> 
        <Stack.Screen name="PontosPage" component={PontosPage} options={{headerShown: false}}/> 
        <Stack.Screen name="PlanoPage" component={PlanoPage} options={{headerShown: false}}/> 
        <Stack.Screen name="BuyPage" component={BuyPage} options={{headerShown: false}}/>
        <Stack.Screen name="AlertPage" component={AlertPage} options={{headerShown: false}}/>
        <Stack.Screen name="InputPage" component={InputPage} options={{headerShown: false}}/>
        

    </Stack.Navigator>
    </NavigationContainer>

    

  );
}