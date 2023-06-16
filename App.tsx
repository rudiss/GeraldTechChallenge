import Navigation from './src/navigation';

import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {commonViewStyles} from './src/theme';

const App: React.FC<{}> = ({}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#ccc' : '#fff',
  };

  return (
    <GestureHandlerRootView style={commonViewStyles.flex}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Navigation />
    </GestureHandlerRootView>
  );
};

export default App;
