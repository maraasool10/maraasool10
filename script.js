document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const messageElement = document.getElementById('message');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Obtém os dados do formulário
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value.trim();

        // Validação básica
        if (!email || !senha) {
            messageElement.textContent = 'Por favor, preencha todos os campos.';
            messageElement.style.color = 'red';
            return;
        }

        // Simulação de autenticação (substitua com autenticação real)
        const validEmail = 'usuario@exemplo.com';
        const validSenha = 'senha123';

        if (email === validEmail && senha === validSenha) {
            messageElement.textContent = 'Login bem-sucedido!';
            messageElement.style.color = 'green';
            setTimeout(() => {
                window.location.href = 'outra_pagina.html';
            }, 1000); // Aguarda 1 segundo antes de redirecionar
        } else {
            messageElement.textContent = 'Email ou senha inválidos.';
            messageElement.style.color = 'red';
        }
    });
});
                      
