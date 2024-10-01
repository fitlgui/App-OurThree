// Login.js

import { urlLogin } from "./api";

export async function login(username, password) {

    try {
        const response = await fetch(urlLogin, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });

        if (!response.ok) {
            // Resposta HTTP fora da faixa 2xx
            return {
                success: false,
                message: 'Dados Inválidos!'
            };
        }

        const data = await response.json();
        console.log('Dados da API:', data); // Log para verificar a resposta

        return data; // Retornando diretamente a resposta da API
    } catch (error) {
        return {
            success: false,
            message: error.message || 'Erro de rede',
        };
    }
}
