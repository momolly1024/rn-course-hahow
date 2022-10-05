import { StyleSheet, View, Text, Button, Image } from 'react-native'
import React from 'react'

export default function HomeDetailScreen(props) {
    // const name = props.route.params.name || 'nothing get'
    const passProps = props.route.params.passProps || 'nothing get'
    return (
        <View style={styles.container}>
            <Text>HomeDetailScreen</Text>
            <Text>{passProps.note}</Text>
            <Image source={{ uri: passProps.photo }} style={styles.image} />
            {/* <Button
                title='go back'
                onPress={() => {
                    props.navigation.push('Home')
                }}
            />
            <Text>{name}</Text>
            <Button
                title='change first page food'
                onPress={() => props.route.params.functionA('apple')}
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
    image: { width: 20, height: 40 },
})
