import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../../../../screens/Home/home';
import Details from '../../../../screens/Home/details';

const HomeStack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={Details} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;
