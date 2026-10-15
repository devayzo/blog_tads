import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Alert,
  Box,
  Button,
  Container,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article'
import SaveIcon from '@mui/icons-material/Save'
import { cadastrarPost } from '../data/storage'

const categorias = ['Tecnologia', 'Aulas', 'Novidades', 'Projetos']

function NovoPost({ usuario }) {
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [categoria, setCategoria] = useState('')
  const [resumo, setResumo] = useState('')
  const [conteudo, setConteudo] = useState('')
  const [erro, setErro] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!titulo.trim() || !categoria || !resumo.trim() || !conteudo.trim()) {
      setErro('Preencha todos os campos para publicar o post.')
      return
    }

    cadastrarPost({
      titulo: titulo.trim(),
      categoria,
      resumo: resumo.trim(),
      conteudo: conteudo.trim(),
      autor: usuario.nome,
      data: new Date().toLocaleDateString('pt-BR'),
    })

    navigate('/')
  }

  return (
    <Container maxWidth="md" sx={{ py: { xs: 3, md: 5 } }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', color: '#111827', mb: 1 }}>
          Novo Post
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Compartilhe uma nova publicação com a turma.
        </Typography>
      </Box>

      <Paper component="form" onSubmit={handleSubmit} elevation={2} sx={{ p: { xs: 2.5, sm: 4 }, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <ArticleIcon color="primary" />
          <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
            Informações da publicação
          </Typography>
        </Box>

        <TextField
          label="Título"
          fullWidth
          required
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          select
          label="Categoria"
          fullWidth
          required
          value={categoria}
          onChange={(event) => setCategoria(event.target.value)}
          sx={{ mb: 2 }}
        >
          {categorias.map((item) => (
            <MenuItem key={item} value={item}>{item}</MenuItem>
          ))}
        </TextField>
        <TextField
          label="Resumo"
          fullWidth
          required
          multiline
          minRows={2}
          value={resumo}
          onChange={(event) => setResumo(event.target.value)}
          helperText="Uma frase curta para apresentar o conteúdo."
          sx={{ mb: 2 }}
        />
        <TextField
          label="Conteúdo"
          fullWidth
          required
          multiline
          minRows={7}
          value={conteudo}
          onChange={(event) => setConteudo(event.target.value)}
          sx={{ mb: 2 }}
        />

        {erro && <Alert severity="error" sx={{ mb: 2 }}>{erro}</Alert>}

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
          <Button onClick={() => navigate('/')} color="inherit">Cancelar</Button>
          <Button type="submit" variant="contained" startIcon={<SaveIcon />}>
            Publicar post
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default NovoPost
