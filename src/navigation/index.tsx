import {StatusBar, useColorScheme} from 'react-native';
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from '../theme';
import DrawerNavigator from './main';
import {ROUTES} from './routes';

export type MainStackParamList = {
  [ROUTES.MAIN_HOME_DRAWER]: {};
};
const MainStack = createNativeStackNavigator<MainStackParamList>();

const Navigation: React.FC<{}> = ({}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.BLACK : colors.WHITE,
  };

  const navigationTheme: Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.WHITE,
    },
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <MainStack.Navigator
        initialRouteName={ROUTES.MAIN_HOME_DRAWER}
        screenOptions={{
          headerShown: false,
        }}>
        <MainStack.Screen
          name={ROUTES.MAIN_HOME_DRAWER}
          component={DrawerNavigator}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
