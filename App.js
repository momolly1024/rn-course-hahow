import { StatusBar } from 'expo-status-bar'
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MyButton from './src/components/button/MyButton'

import HomeScreen from './src/screen/HomeScreen'
import ProfileScreen from './src/screen/ProfileScreen'
import HomeDetailScreen from './src/screen/HomeDetailScreen'
import ProfileDetailScreen from './src/screen/ProfileDetailScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { NavigationContainer } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack'
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function MyHomeStack() {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerStyle: { backgroundColor: 'tomato' },
                headerBackTitle: 'back',
                headerTintColor: 'white',
            }}
        >
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Settings' component={ProfileScreen} />
            <Stack.Screen
                name='HomeDetailScreen'
                component={HomeDetailScreen}
                options={{ title: 'my detail' }}
            />
        </Stack.Navigator>
    )
}

function MyProfileStack() {
    return (
        <Stack.Navigator
            initialRouteName='Profile'
            screenOptions={{
                headerStyle: { backgroundColor: 'tomato' },
                headerBackTitle: 'back',
                headerTintColor: 'white',
            }}
        >
            <Stack.Screen name='Profile' component={ProfileScreen} />
            <Stack.Screen
                name='ProfileDetailScreen'
                component={ProfileDetailScreen}
                options={{ title: 'my detail' }}
            />
        </Stack.Navigator>
    )
}
export default function App() {
    return (
        // <View style={styles.container}>
        //     <Text>Open up App.js to start working on your app!</Text>
        // </View>

        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName

                        if (route.name === 'Home') {
                            // return (
                            //     <Image
                            //         source={{
                            //             uri: 'https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                            //         }}
                            //         style={{ width: 50, height: 50 }}
                            //     />
                            // )
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline'
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'ios-trophy' : 'ios-list'
                        }
                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        )
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name='Home' component={MyHomeStack} />
                <Tab.Screen name='Settings' component={MyProfileStack} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
