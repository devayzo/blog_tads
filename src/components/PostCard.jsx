import React from 'react'
import { Card, CardContent, Typography, Chip, Box, Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function PostCard({titulo, autor, data, resumo, categoria}) {
  return (
    <Card 
      variant="outlined" 
      sx={{ 
        mb: 3, 
        borderRadius: 2, 
        transition: '0.2s', 
        '&:hover': { boxShadow: 4, translateY: '-2px' } 
      }}
    >
      <CardContent>
        <Chip 
          label={categoria} 
          color="primary" 
          size="small" 
          sx={{ mb: 1.5, fontWeight: 'bold' }} 
        />
        
        <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 1 }}>
          {titulo}
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {resumo}
        </Typography>

        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            pt: 2, 
            borderTop: '1px solid',
            borderColor: 'divider' 
          }}
        >
          <Typography variant="caption" color="text.secondary">
            Por <strong>{autor}</strong> em {data}
          </Typography>

          <Button size="small" startIcon={<FavoriteBorderIcon />}>
            Curtir
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default PostCard