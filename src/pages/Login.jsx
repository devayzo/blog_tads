import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Paper, Typography, TextField, Button, Alert } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import { mockUsuarios } from '../data/mockUsuarios';

function Login({ onLogin }) {
  // Cada campo do formulario tem seu proprio estado (formulario controlado).
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  const navigate = useNavigate()

  function handleSubmit(e) {
    // Sem isso o navegador recarrega a pagina ao enviar o formulario.
    e.preventDefault()

    if (email === '' || senha === '') {
      setErro('Preencha o e-mail e a senha.')
      return
    }

    // Procura nos dados mockados um usuario com o e-mail E a senha informados.
    const usuario = mockUsuarios.find((u) => u.email === email && u.senha === senha)

    if (!usuario) {
      setErro('E-mail ou senha inválidos.')
      return
    }

    setErro('')
    onLogin(usuario)   // avisa o App quem entrou
    navigate('/')      // redireciona para a pagina principal
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <BookIcon sx={{ fontSize: 40, color: 'primary.main' }} />
            <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', mt: 1 }}>
              Blog TADS
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Entre para ver as publicações da turma
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="E-mail"
              type="email"
              fullWidth
              margin="normal"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              label="Senha"
              type="password"
              fullWidth
              margin="normal"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            {erro && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {erro}
              </Alert>
            )}

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              sx={{ mt: 3 }}
            >
              Entrar
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

export default Login