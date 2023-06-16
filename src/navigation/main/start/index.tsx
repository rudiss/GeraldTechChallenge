import React from 'react';
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DrawerNavigationProp,
  useDrawerProgress,
} from '@react-navigation/drawer';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';

import {ContactScreen} from '../../../screens/Contact';
import {commonViewStyles, colors} from '../../../theme';
import {ROUTES} from '../../routes';
import {MenuIcon} from '../../../components/MenuIcon';
import HomeNavigation from './home';

interface Props {
  navigation: DrawerNavigationProp<any>;
}

const BOTTOM_TAB_HEIGHT = 60;

export type BottomTabParamList = {
  [ROUTES.HOME_BOTTOM_TAB]: {};
  [ROUTES.CONTACT_BOTTOM_TAB]: {};
};
const Tab = createBottomTabNavigator<BottomTabParamList>();

const {width} = Dimensions.get('screen');

const Tabs = [
  {
    name: ROUTES.HOME_BOTTOM_TAB,
    component: HomeNavigation,
  },
  {
    name: ROUTES.CONTACT_BOTTOM_TAB,
    component: ContactScreen,
  },
] as const;
const BottomTabNavigator: React.FC<Props> = ({navigation}) => {
  const drawerProgress = useDrawerProgress();

  const homePageStyle = useAnimatedStyle(() => {
    const interpolateDegrees = interpolate(
      drawerProgress.value,
      [0, 1],
      [0, -3],
    );
    const interpolateTranslateX = interpolate(
      drawerProgress.value,
      [0, 1],
      [0, Platform.OS === 'android' ? width * 0.55 : 50],
    );
    const interpolateTranslateY = interpolate(
      drawerProgress.value,
      [0, 1],
      [0, 50],
    );
    const interpolateBorder = interpolate(
      drawerProgress.value,
      [0, 1],
      [0, 30],
    );
    return {
      transform: [
        {rotate: interpolateDegrees + 'deg'},
        {translateX: interpolateTranslateX},
        {translateY: interpolateTranslateY},
      ],
      borderTopLeftRadius: interpolateBorder,
    };
  });

  const handleOpenDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={[commonViewStyles.flex, styles.background]}>
      <Animated.View style={[styles.container, homePageStyle]}>
        <SafeAreaView style={commonViewStyles.flex}>
          <SafeAreaView style={styles.headerContainer}>
            <TouchableOpacity
              onPress={handleOpenDrawer}
              style={styles.menuDrawer}>
              <MenuIcon size={26} spacer={4} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>
              {ROUTES.DRAWER_START.toUpperCase()}
            </Text>
          </SafeAreaView>

          <Tab.Navigator
            initialRouteName={ROUTES.HOME_BOTTOM_TAB}
            backBehavior="none"
            screenOptions={{
              tabBarItemStyle: {
                height: BOTTOM_TAB_HEIGHT,
                paddingTop: 15,
              },
              tabBarStyle: [
                styles.tabBarStyle,
                {height: BOTTOM_TAB_HEIGHT},
                Platform.select({
                  ios: {
                    ...commonViewStyles.shadow(6),
                    shadowOffset: {width: 0, height: -30},
                  },
                  android: {
                    elevation: 25,
                    paddingBottom: 70,
                  },
                }),
              ],
              unmountOnBlur: true,
              headerShown: false,
              tabBarActiveTintColor: colors.LIGHT_RED,
            }}>
            {Tabs.map(item => {
              return (
                <Tab.Screen
                  key={item.name}
                  name={item.name}
                  component={item.component}
                />
              );
            })}
          </Tab.Navigator>
        </SafeAreaView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  background: {backgroundColor: colors.PURPLE},
  tabBarStyle: {
    paddingHorizontal: 40,
    backgroundColor: colors.WHITE,
    borderTopWidth: 0,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  headerTitle: {
    color: colors.LIGHT_GREY,
    fontSize: 20,
    letterSpacing: 4,
    marginLeft: 10,
  },
  menuDrawer: {
    marginLeft: 20,
    marginRight: 10,
  },
});

export default BottomTabNavigator;
