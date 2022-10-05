import { StatusBar } from 'expo-status-bar'
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text>ProfileScreen</Text>
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
