import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Title from '../../src/components/TitleForms';
import Form from '../../src/components/Login';
import { style } from './style';

export default function SignIn({ navigation }){
    return (
        <View style={style.container}>
            <View>
                <View style={style.title}>
                    <Title text={'Login'}/>
                </View>
                <View style={style.form}>
                    <Form rota={() => navigation.navigate('Home')} conta={() => navigation.navigate('Registrar')}/>
                </View>
            </View>
        </View> 
    )
}
