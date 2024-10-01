import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, Alert } from 'react-native';
import { style } from './styles';
import { login } from '../../../services/Login';

export default function Form(props){
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const result = await login(username, password);

        if(result.message === 'Login bem-sucedido'){
            Alert.alert('Sucesso', 'Logado com sucesso');
            props.rota();
        } else {
            Alert.alert('Erro', result.message);
        }
    };
    
    return (
        <View style={style.container}> 
            <Text style={style.text}>
                Usuário    
            </Text>
            <TextInput
            style={style.input}
            placeholder='Digite seu usuário'
            keyboardType='text'
            value={username}
            onChangeText={setUsername}
            />
            <Text style={style.text}>
                Senha
            </Text>
            <TextInput
            style={style.input}
            placeholder='Digite sua senha'
            textContentType='password'
            value={password}
            onChangeText={setPassword}
            />

            <Pressable 
            style={style.btn}
            onPress={handleLogin}>
                <Text style={style.text}>Logar</Text>
            </Pressable>
            <Pressable
            onPress={() => {
                props.conta();
            }}>
                <Text style={style.ntConta}>Não Tenho Conta!</Text>
            </Pressable>
        </View>
    )
}
