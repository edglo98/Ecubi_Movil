import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './stackRoutes';

const Stack = createStackNavigator();
function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Routes.Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Routes.HomePage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Inventory"
          component={Routes.Inventory}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Finance"
          component={Routes.Finance}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MyDeal"
          component={Routes.MyDeal}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DealConfig"
          component={Routes.DealConfig}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Branch"
          component={Routes.DealBranch}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddBranch"
          component={Routes.AddBranch}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
