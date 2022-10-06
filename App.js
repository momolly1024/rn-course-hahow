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
import React, { useEffect, useState } from 'react'
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
    const [count, setCount] = useState(0)
    // useEffect(() => {
    //     console.log('useEffect count', count)
    //     const myCount = setInterval(() => {
    //         setCount(count + 1)
    //     }, 1000)
    //     return () => {
    //         clearInterval(myCount)
    //         console.log('clearInterval return', count)
    //     }
    // }, [count])
    return (
        <View>
            <Text>{count}</Text>
        </View>
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
