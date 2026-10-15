import {
  Container,
  Box,
  Typography,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
} from '@mui/material';
import { mockUsuarios } from '../data/mockUsuarios';

function Usuarios() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', color: '#111827', mb: 1 }}>
          Usuários Cadastrados
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Lista dos usuários cadastrados (dados mockados)
        </Typography>
      </Box>

      <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>E-mail</TableCell>
              {/* A senha nunca e exibida aqui, assim como ela nunca deveria ficar no front-end numa app real. */}
            </TableRow>
          </TableHead>
          <TableBody>
            {mockUsuarios.map((usuario) => (
              <TableRow key={usuario.id}>
                <TableCell>{usuario.id}</TableCell>
                <TableCell>{usuario.nome}</TableCell>
                <TableCell>{usuario.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Usuarios