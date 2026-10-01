import { AppBar, Toolbar, Typography, Container, Button, Box } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';

function Header() {
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
          <Box>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Novo Post</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header