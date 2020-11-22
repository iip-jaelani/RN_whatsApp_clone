/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {TopNavScreen} from '../screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, TouchableOpacity, Text} from 'react-native';
import Animated from 'react-native-reanimated';
import {LIGHT_THEME} from '../styles/colors';
//
import {Provider} from 'react-redux';
import store from '../redux/store';

function MyTabBar(props) {
  const {state, descriptors, navigation, position} = props;
  const theme = LIGHT_THEME;
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = Animated.interpolate(position, {
          inputRange,
          outputRange: inputRange.map((i) => (i === index ? 1 : 0.5)),
        });

        return (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: route.name === 'Camera' ? 0 : 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme.PRIMARY_DOFF_COLOR,
              paddingVertical: 10,
              paddingHorizontal: 5,
            }}>
            {route.name === 'Camera' ? (
              <Animated.View style={{opacity}}>
                <MaterialCommunityIcons name="camera" color="#fff" size={23} />
              </Animated.View>
            ) : (
              <Animated.View
                style={{
                  opacity,
                }}>
                <Text
                  style={{
                    color: theme.WHITE_COLOR,
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                  }}>
                  {label}
                </Text>
              </Animated.View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Chat"
    tabBar={(props) => <MyTabBar {...props} />}
    tabBarOptions={{
      bounces: true,
      showIcon: true,
      indicatorStyle: {
        backgroundColor: 'blue',
        width: 10,
        height: 1,
      },
    }}>
    <Tab.Screen name="Camera" component={TopNavScreen.Camera} />
    <Tab.Screen name="Chat" component={TopNavScreen.Home} />
    <Tab.Screen name="Status" component={TopNavScreen.Status} />
    <Tab.Screen name="Panggilan" component={TopNavScreen.Call} />
  </Tab.Navigator>
);

export const Router = (props) => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
