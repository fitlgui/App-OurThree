import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, Alert } from 'react-native';
import { style } from './styles';
import { register } from '../../../services/Register'; // Importando a função de registro

export default function Register(props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        const result = await register(username, email, password);

        if (result.success) {
            Alert.alert('Sucesso', result.message);
            props.rota(); // Redireciona após o registro
        } else {
            Alert.alert('Erro', result.message);
        }
    };

    return (
        <View style={style.container}>
            <Text style={style.text}>Usuário</Text>
            <TextInput
                style={style.input}
                placeholder='Digite seu usuário'
                value={username}
                onChangeText={setUsername}
                keyboardType='default'
            />
            <Text style={style.text}>Email</Text>
            <TextInput
                style={style.input}
                placeholder='Digite seu email'
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
            />
            <Text style={style.text}>Senha</Text>
            <TextInput
                style={style.input}
                placeholder='Digite sua senha'
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />

            <Pressable style={style.btn} onPress={handleRegister}>
                <Text style={style.text}>Registrar</Text>
            </Pressable>
        </View>
    );
}
