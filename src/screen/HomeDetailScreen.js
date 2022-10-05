import { StyleSheet, View, Text, Button } from 'react-native'
import React from 'react'

export default function HomeDetailScreen(props) {
    return (
        <View style={styles.container}>
            <Text>HomeDetailScreen</Text>
            <Button
                title='go back'
                onPress={() => {
                    props.navigation.push('Home')
                }}
            />
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
