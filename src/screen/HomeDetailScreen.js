import { StyleSheet, View, Text, Button, Image } from 'react-native'
import React from 'react'

export default function HomeDetailScreen(props) {
    // const name = props.route.params.name || 'nothing get'
    const passProps = props.route.params.passProps || 'nothing get'
    return (
        <View style={styles.container}>
            <Text>HomeDetailScreen</Text>
            <Text style={{ fontSize: 30 }}>{passProps.note}</Text>

            {/* <Image style={styles.image}  source={{ uri: passProps.photo }} /> */}
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
