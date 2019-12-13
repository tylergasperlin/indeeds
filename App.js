import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import AuthScreen from './screens/AuthScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import {createAppContainer} from 'react-navigation'

const MainNavigator = createBottomTabNavigator({
  welcome: {screen: WelcomeScreen},
  auth: {screen: AuthScreen}
})

class App extends React.Component {
  render(){

    
    return (
      <View style={styles.container}>
        <MainNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default createAppContainer(MainNavigator);