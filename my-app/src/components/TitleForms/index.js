import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { style } from './style';

export default function Title(props){
    return (
        <View>
            <Text style={style.text}>
                {props.text}
            </Text>
        </View>
    )
}

