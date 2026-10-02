import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Button, Box } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import LogoutIcon from '@mui/icons-material/Logout';

function Header({ usuario, onSair }) {
  return (
    <AppBar position="static" color="primary" elevation={1}>
      <Container maxWidth="md">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <BookIcon />
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
              Blog TADS
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit">Novo Post</Button>

            <Typography variant="body2">
              Olá, <strong>{usuario.nome}</strong>
            </Typography>
            <Button color="inherit" startIcon={<LogoutIcon />} onClick={onSair}>
              Sair
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header