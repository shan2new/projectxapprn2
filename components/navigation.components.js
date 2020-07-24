import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TopNavigation, BottomNavigation, BottomNavigationTab, Icon, Divider } from '@ui-kitten/components';
import HomeScreen from './home.components';
import Profile from './profile.components';
import Orders from './orders.components';

const { Navigator, Screen } = createBottomTabNavigator();

const PersonIcon = (props) => (
    <Icon {...props} name='person-outline'/>
  );
  
  const FoodIcon = (props) => (
    <Icon {...props} name='home-outline'/>
  );
  
  const OrderIcon = (props) => (
    <Icon {...props} name='shopping-bag-outline'/>
  );

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title='Profile' icon={PersonIcon}/>
      <BottomNavigationTab title='Home' icon={FoodIcon}/>
      <BottomNavigationTab title='My Orders' icon={OrderIcon}/>
    </BottomNavigation>
  );
  
  const TabNavigator = () => (
    <Navigator tabBar={props => <BottomTabBar {...props} />}>
      <Screen name='Profile' component={Profile}/>
      <Screen name='Home' component={HomeScreen}/>
      <Screen name='MyOrders' component={Orders}/>
    </Navigator>
  );
  
  export const AppNavigator = () => (
    <NavigationContainer>
        <TopNavigation title='Project X' alignment='center'/>
        <Divider/>
        <Divider/>
        <Divider/>
        <Divider/>
        <Divider/>
        <Divider/>
        <Divider/>
        <Divider/> 
        <TabNavigator/>      
    </NavigationContainer>
  )