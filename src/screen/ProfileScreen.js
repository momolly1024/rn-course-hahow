import { StatusBar } from 'expo-status-bar'
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import * as StorageHelper from '../helpers/StorageHelper'

export default function ProfileScreen(props) {
    const [name, setName] = useState('')
    useEffect(() => {
        loadStorage()
    }, [])
    const loadStorage = async () => {
        let nameGet = await StorageHelper.getMySetting('name')
        if (nameGet) {
            setName(nameGet)
        }
    }
    const changeName = async () => {
        try {
            await StorageHelper.setMySetting('name', name)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <View style={styles.container}>
            <Text>ProfileScreen</Text>
            <TextInput
                maxLength={10}
                style={{
                    height: 50,
                    width: 150,
                    borderWidth: 5,
                    borderColor: 'gray',
                    fontSize: 20,
                    textAlign: 'center',
                    color: 'white',
                    backgroundColor: 'darkgray',
                }}
                onChangeText={(t) => {
                    setName(t)
                }}
                value={name}
            />
            <Text>{name}</Text>
            <Button
                title='設定名字'
                onPress={() => {
                    changeName()
                }}
            />
            {/* <Button
                title='go to next page'
                onPress={() => {
                    props.navigation.push('ProfileDetailScreen')
                }}
            /> */}
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
