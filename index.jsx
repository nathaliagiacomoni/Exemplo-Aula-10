import React, { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Grid, Button } from '@mui/material';

const Login = () => {
    const [login, setLogin] = useState('');

    const handleSubmit = () => {
        // Aqui você pode adicionar a lógica para lidar com o envio do formulário
        console.log('Login enviado:', login);
    };

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
                <h2>Login</h2>
            </Grid>
            <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel htmlFor="login_nome">Nome de Usuário</InputLabel>
                    <Input
                        id="login_nome"
                        aria-describedby="login_nome_helper_text"
                        value={login}
                        onChange={e => { setLogin(e.target.value) }}
                    />
                    <FormHelperText id="login_nome_helper_text">Digite seu nome de usuário</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" onClick={handleSubmit}>Enviar</Button>
            </Grid>
        </Grid>
    );
}

export default Login;
