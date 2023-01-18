import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import LoginScreen from '../screens/loginTypicode';
import UserScreen from '../screens/userTypicode';
import PhotosScreen from '../screens/photosTypicode';
import UsersSVG from '../assets/UsersSVG';
import PhotosSVG from '../assets/PhotosSVG';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'StartScreen'}>
      <Stack.Screen name="StartScreen" component={LoginScreen} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

function Home({route}) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Users"
        initialParams={route.params}
        component={UserScreen}
        options={{
          tabBarIcon: () => <UsersSVG />,
          tabBarLabelStyle: {fontSize: 15},
          tabBarActiveTintColor: 'teal',
          tabBarActiveBackgroundColor: '#ADD8E6',
          tabBarInactiveBackgroundColor: '#D3D3D3',
        }}
      />
      <Tab.Screen
        name="Photos"
        initialParams={route.params}
        component={PhotosScreen}
        options={{
          tabBarIcon: () => <PhotosSVG />,
          tabBarLabelStyle: {fontSize: 15},
          tabBarActiveTintColor: 'teal',
          tabBarActiveBackgroundColor: '#ADD8E6',
          tabBarInactiveBackgroundColor: '#D3D3D3',
        }}
      />
    </Tab.Navigator>
  );
}

export default RootStack;
