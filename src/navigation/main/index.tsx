import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {StyleSheet} from 'react-native';
import DrawerContent from '../../components/DrawerContent';
import {ROUTES} from '../routes';
import {colors} from '../../theme';
import BottomTabNavigator from './start';

export type DrawerParamList = {
  [ROUTES.DRAWER_BOTTOM]: {};
  [ROUTES.DRAWER_START]: {};
  [ROUTES.DRAWER_CART]: {};
  [ROUTES.DRAWER_FAVOURITES]: {};
  [ROUTES.DRAWER_ORDERS]: {};
};

const Drawer = createDrawerNavigator();
const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName={ROUTES.DRAWER_START}
      drawerContent={DrawerContent}
      screenOptions={{
        drawerActiveBackgroundColor: colors.LIGHTER_RED,
        drawerActiveTintColor: colors.LIGHT_RED,
        drawerInactiveTintColor: colors.WHITE,
        drawerLabelStyle: styles.label,
        drawerStyle: {width: '50%'},
        sceneContainerStyle: {flex: 1, backgroundColor: '#ccc'},
        overlayColor: 'transparent',
        headerShown: false,
      }}>
      <Drawer.Screen
        name={ROUTES.DRAWER_START}
        component={BottomTabNavigator}
      />
      <Drawer.Screen name={ROUTES.DRAWER_CART} component={BottomTabNavigator} />
      <Drawer.Screen
        name={ROUTES.DRAWER_FAVOURITES}
        component={BottomTabNavigator}
      />
      <Drawer.Screen
        name={ROUTES.DRAWER_ORDERS}
        component={BottomTabNavigator}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default DrawerNavigator;
