import { StatusBar } from 'expo-status-bar'
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity,
    FlatList,
    Image,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
const MOCKED_DATA = [
    {
        id: '1',
        note: 'aaa',
        date: '2022/10/05 10:00',
        // photo: 'https://picsum.photos/200/300?random=1',
    },
    {
        id: '2',
        note: 'bbb',
        date: '2022/10/06 13:00',
        // photo: 'https://picsum.photos/200/300?random=2',
    },
    {
        id: '3',
        note: 'ccc',
        date: '2022/10/07 14:00',
        // photo: 'https://picsum.photos/200/300?random=3',
    },
    {
        id: '4',
        note: 'ddd',
        date: '2022/10/08 09:00',
        // photo: 'https://picsum.photos/200/300?random=4',
    },
    {
        id: '5',
        note: 'eee',
        date: '2022/10/09 09:00',
        // photo: 'https://picsum.photos/200/300?random=5',
    },
    {
        id: '6',
        note: 'fff',
        date: '2022/10/10 09:00',
        // photo: 'https://picsum.photos/200/300?random=6',
    },
    {
        id: '7',
        note: 'ggg',
        date: '2022/10/11 09:00',
        // photo: 'https://picsum.photos/200/300?random=7',
    },
    {
        id: '8',
        note: 'hhh',
        date: '2022/10/12 09:00',
        // photo: 'https://picsum.photos/200/300?random=8',
    },
    {
        id: '9',
        note: 'iii',
        date: '2022/10/13 09:00',
        // photo: 'https://picsum.photos/200/300?random=9',
    },
    {
        id: '10',
        note: 'jjj',
        date: '2022/10/14 09:00',
        // photo: 'https://picsum.photos/200/300?random=9',
    },
    {
        id: '11',
        note: 'kkk',
        date: '2022/10/15 09:00',
        // photo: 'https://picsum.photos/200/300?random=11',
    },
    {
        id: '12',
        note: 'lll',
        date: '2022/10/16 09:00',
        // photo: 'https://picsum.photos/200/300?random=21',
    },
]
export default function HomeScreen(props) {
    const [food, setFood] = useState('banana')
    const [dataSource, setDataSource] = useState({})
    const changeFood = (foodGet) => {
        setFood(foodGet)
    }
    const showNoticeDetail = (cases) => {
        props.navigation.push('HomeDetailScreen', { passProps: cases })
    }
    const renderBook = (cases) => {
        return (
            <TouchableOpacity onPress={() => showNoticeDetail(cases)}>
                <View>
                    <View style={styles.MainView}>
                        {/* <Image
                            source={{ uri: cases.photo }}
                            style={styles.image}
                        /> */}
                        <View style={{ fiex: 1 }}>
                            <Text
                                ellipsizeMode='tail'
                                numberOfLines={3}
                                style={{
                                    color: 'black',
                                    fontSize: 15,
                                    marginTop: 8,
                                }}
                            >
                                {cases.note}
                            </Text>
                            <Text
                                ellipsizeMode='tail'
                                numberOfLines={3}
                                style={{
                                    color: 'black',
                                    fontSize: 13,
                                    marginTop: 8,
                                    marginBottom: 8,
                                }}
                            >
                                {cases.date}
                            </Text>
                        </View>
                        <Image
                            source={require('../../assets/img/fast-forward.png')}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.seperator} />
                </View>
            </TouchableOpacity>
        )
    }
    useEffect(() => {
        const book = MOCKED_DATA
        setDataSource(book)
    }, [])
    return (
        <View>
            <FlatList
                data={dataSource}
                renderItem={(cases) => renderBook(cases.item)}
                keyExtracto={(cases) => cases.id}
                style={{ backgroundColor: 'white' }}
            />

            {/* <Text>HomeScreen</Text>
            <Text>{food}</Text>
            <Button
                title='go to next page'
                onPress={() => {
                    props.navigation.push('HomeDetailScreen', {
                        name: 'molly',
                        functionA: (arg) => changeFood(arg),
                    })
                }}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    MainView: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 8,
    },
    seperator: {
        height: 1,
        backgroundColor: '#dddddd',
    },
    image: { width: 20, height: 40, marginLeft: 40 },
})
