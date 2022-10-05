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
import baseText from '../../style/style'
function MyButton(props) {
    return (
        <TouchableOpacity
            onPress={props.myOnPress}
            style={{
                backgroundColor: '#00aeef',
                borderRadius: 20,
                width: 300,
                height: 40,
                justifyContent: 'center',
            }}
        >
            <Text style={[baseText, { color: 'red' }]}>{props.title}</Text>
        </TouchableOpacity>
    )
}
MyButton.propTypes = {
    title: PropTypes.string.isRequired,
    myOnPress: PropTypes.func,
}
MyButton.defaultProps = {
    title: 'HELLO',
}
export default MyButton
