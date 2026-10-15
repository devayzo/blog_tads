import { useState } from 'react';
import { Container, Box, Paper, Typography, TextField, Button } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function CadastroUsuario() {
  // Cada campo do formulario tem seu proprio estado (formulario controlado).
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')

  function handleCadastro(e) {
    // Sem isso o navegador recarrega a pagina ao enviar o formulario.
    e.preventDefault()

    // Tela apenas visual (mock): nao valida nem salva o cadastro de fato.
    console.log('Cadastro (mock):', { nome, email, senha, confirmarSenha })
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
            <PersonAddIcon sx={{ fontSize: 40, color: 'primary.main' }} />
            <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', mt: 1 }}>
              Cadastro de Usuário
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Preencha os dados para criar sua conta
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleCadastro}>
            <TextField
              label="Nome"
              fullWidth
              margin="normal"
              autoFocus
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <TextField
              label="E-mail"
              type="email"
              fullWidth
              margin="normal"
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

            <TextField
              label="Confirmar Senha"
              type="password"
              fullWidth
              margin="normal"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              sx={{ mt: 3 }}
            >
              Cadastrar
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

export default CadastroUsuario