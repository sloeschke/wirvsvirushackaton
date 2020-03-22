import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import { Image, Platform, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        activeBackgroundColor: '#00bbdd',
        inactiveBackgroundColor: '#00bbde',
        activeTintColor: 'white',
        inactiveTintColor: 'grey',
        labelStyle: {
          fontSize: 18,
        },
        style: {
          borderTopWidth: 0,
          paddingTop: 3,
          paddingBottom: 4,
          height: 60,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 20,
          shadowOffset: { width: 0, height: 0 }
        }
      }}>


      <BottomTab.Screen

        name="Home"
        component={HomeScreen}
        options={{
          title: 'Section 1',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={LinksScreen}
        options={{
          title: 'Section 2',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Corona FAQs';
    case 'Links':
      return 'Corona FAQs';
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  }
})