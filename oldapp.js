// import { StatusBar } from 'expo-status-bar'
// import {
//     StyleSheet,
//     Text,
//     View,
//     Button,
//     TextInput,
//     TouchableOpacity,
// } from 'react-native'
// import React, { useState } from 'react'
// import PropTypes from 'prop-types'
// import MyButton from './src/components/button/MyButton'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createStackNavigator } from '@react-navigation/stack'

// export default function App() {
//     const [validCode, setValidCode] = useState('')
//     const printBtn = () => {
//         console.log('asd')
//     }
//     const getNumber = () => {
//         if (validCode === '1234') {
//             return <Text style={{ color: 'green' }}>OK!</Text>
//         } else {
//             return <Text style={{ color: 'red' }}>NOT!</Text>
//         }
//     }
//     return (
//         <View style={styles.container}>
//             <Text>Open up App.js to start working on your app!</Text>

//             <TextInput
//                 maxLength={4}
//                 style={{
//                     height: 50,
//                     width: 350,
//                     borderRadius: 0,
//                     borderColor: 'green',
//                     color: 'white',
//                     backgroundColor: 'blue',
//                     textAlign: 'center',
//                 }}
//                 onChangeText={(t) => {
//                     setValidCode(t)
//                 }}
//                 keyboardType={'numeric'}
//                 value={validCode}
//             />
//             {getNumber()}
//             {validCode === '1234' ? <Text>OK~</Text> : <Text>NOT~</Text>}
//             <MyButton myOnPress={() => console.log('123')} title='ENTER' />
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// })
