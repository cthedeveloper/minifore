import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SignInScreen from './src/screens/SignInScreen';
import SplashScreen from './src/screens/SplashScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  // Styles for the custom tab bar
});

// Replace with your custom tab bar implementation
const CustomTabBar = ({ state, descriptors, navigation }) => {
  // Implement logic for rendering custom tab bar items here
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { focused, color, size } = descriptors[route.key];
        const iconName = route.name;

        return (
          <TouchableOpacity key={index} onPress={() => navigation.navigate(route.name)}>
            <MaterialIcons name={iconName} size={size} color={focused ? 'red' : color} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const MainScreen = () => (
  <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <MainScreen />
    </NavigationContainer>
  );
};

export default App;
