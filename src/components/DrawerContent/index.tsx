import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {styles} from './styles';

const DrawerContent: React.FC<DrawerContentComponentProps> = props => (
  <View style={styles.container}>
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Beka</Text>
      </View>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.flexGrow}>
        <View style={styles.listPadding}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => {}} style={styles.signOutButton}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  </View>
);

export default DrawerContent;
