import React, { useState } from 'react';
import { Button, Icon, List, ListItem, Avatar, Divider } from '@ui-kitten/components';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import axios from 'axios';
import details from './details.components'

const Stack = createStackNavigator();

export const HomeScreen = () => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Layouts' component={HomeScreenPage}/>
    <Stack.Screen name='Details' component={Details}/>
  </Stack.Navigator>
);

export default HomeScreenPage = (props) => {
  const [restuarants, setRestuarants] = useState([]);
  axios.get('http://159.65.148.148:8080/producer/list')
    .then(res => {
      setRestuarants(res.data)
    })
  
  const renderItemAccessory = (props) => (
    <Button size='tiny'>ORDER</Button>
  );

  const onItemPress = (index) => {
    props.navigation.navigate('Details');
  };

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.name} ${index + 1}`}
      description={`${item.cuisines} ${index + 1}`}
      accessoryLeft={(props) => <Avatar
        {...props}
        shape='rounded'
        size='large'
        style={[props.style, { tintColor: null }]}
        source={{uri: item.featured_image}}
      />}
      accessoryRight={renderItemAccessory}
    />
  );

  return (
    <List
      style={styles.container}
      data={restuarants}
      ItemSeparatorComponent={Divider}
      renderItem={renderItem}
      onItemPress={onItemPress}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: "100%",
  },
});