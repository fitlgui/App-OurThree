import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Title from '../../src/components/TitleForms';
import Register from '../../src/components/Register';
import { style } from './style';

export default function SignUp(){
    return (
        <View style={style.container}>
            <View>
                <View style={style.title}>
                    <Title text={'Registrar'}/>
                </View>
                <View style={style.form}>
                    <Register rota={() => navigation.navigate('Login')}/>
                </View>
            </View>
        </View> 
    )
}
