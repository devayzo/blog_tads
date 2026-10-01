import { mockPosts } from '../data/mockPosts';
import PostCard from '../components/PostCard';
import { Container, Typography, Box } from '@mui/material';


function Home() {
    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Box sx={{ textCenter: 'center', mb: 4, textAlign: 'center' }}>
                <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', color: '#111827', mb: 1 }}>
                    Publicações da Turma
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Acompanhe os artigos de tecnologia produzidos no curso de TADS
                </Typography>
            </Box>

            {mockPosts.map((post) => (
                <PostCard
                    key={post.id}
                    titulo={post.titulo}
                    autor={post.autor}
                    data={post.data}
                    resumo={post.resumo}
                    categoria={post.categoria}
                />
            ))}
        </Container>
    )
}

export default Home