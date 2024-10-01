// authService.js

import { urlRegister } from "./api";

export async function register(username, email, password) {

    try {
        const response = await fetch(urlRegister, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-admin-key': 'MTnoTopo2024'
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
        });

        if (!response.ok) {
            throw new Error('Erro na requisição');
        }

        const data = await response.json();

        // Verifica se o registro foi bem-sucedido
        if (data.success) {
            return {
                success: true,
                message: 'Registrado com sucesso!',
            };
        } else {
            return {
                success: false,
                message: data.message || 'Erro no registro',
            };
        }
    } catch (error) {
        return {
            success: false,
            message: error.message || 'Erro de rede',
        };
    }
}
