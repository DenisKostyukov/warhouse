import React from 'react';
import {ItemsScreen} from '../screens/ItemsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WarHouseScreen} from '../screens/WareHouse';

export type WareHouseStackList = {
  WareHouse: undefined;
  Items: undefined;
};

const Stack = createNativeStackNavigator<WareHouseStackList>();
export const WareHouseNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'WareHouse'} component={WarHouseScreen} />
      <Stack.Screen name={'Items'} component={ItemsScreen} />
    </Stack.Navigator>
  );
};
