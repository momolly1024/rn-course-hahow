import { View, Text } from 'react-native'
import { AsyncStorage } from 'react-native'
import React from 'react'

/* 

* {string} name
* {bool} isLogin
* {number} accountInfoStatus 0 is none , 1 is verifying, 2 is error , 3 is ...

*/

// export const setUserToken = (key, value) => AsyncStorage.setItem(key, value)
export const getMySetting = (key) => AsyncStorage.getItem(key)
export const setMySetting = (key, value) => AsyncStorage.setItem(key)

export default function StorageHelper() {
    return (
        <View>
            <Text>StorageHelper</Text>
        </View>
    )
}
