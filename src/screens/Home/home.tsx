import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Button, Text} from 'react-native';

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};
