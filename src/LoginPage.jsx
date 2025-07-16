import React from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  Paper,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';

// Importe uma imagem de logo (você precisará ter essa imagem no seu projeto)
// Por exemplo, crie uma pasta 'src/assets' e coloque o logo lá.
import logo from './assets/onebus-logo.png'; // Exemplo de caminho para o logo

const LoginPage = () => {
  const [alignment, setAlignment] = React.useState('login');

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      {/* Lado Esquerdo - Logo */}
      <Grid
        item
        xs={12}
        sm={6}
        md={7}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '50%',
            backgroundColor: '#0077E6', // Azul do topo
            zIndex: 1,
          }}
        />
        <Box sx={{ zIndex: 2, textAlign: 'center' }}>
          <img src={logo} alt="OneBus Logo" style={{ width: '250px', marginBottom: '20px' }} />
        </Box>
      </Grid>

      {/* Lado Direito - Formulário de Login */}
      <Grid
        item
        xs={12}
        sm={6}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5', // Um cinza claro para o fundo
        }}
      >
        <Box
          sx={{
            p: 4,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: '20px',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '450px',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mb: 1, fontWeight: 'bold' }}>
            Bem vindo ao <span style={{ color: '#0077E6' }}>ONE BUS</span>
          </Typography>
          <Typography component="h2" variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
            Login
          </Typography>

          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            sx={{ mb: 3, '& .MuiToggleButtonGroup-grouped': { borderRadius: '20px !important', padding: '5px 25px' } }}
          >
            <ToggleButton value="login">Login</ToggleButton>
            <ToggleButton value="register">Register</ToggleButton>
          </ToggleButtonGroup>

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Seu Email"
            name="email"
            autoComplete="email"
            autoFocus
            placeholder="Entre com seu Email"
            variant="outlined"
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Sua Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            placeholder="Enter your Password"
            variant="outlined"
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
          />

          <Box sx={{ width: '100%', textAlign: 'right', my: 1 }}>
            <Link href="#" variant="body2" sx={{ color: '#0077E6', textDecoration: 'none' }}>
              Esqueceu a senha?
            </Link>
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              py: 1.5,
              borderRadius: '12px',
              backgroundColor: '#0077E6',
              '&:hover': {
                backgroundColor: '#005cb2',
              },
              textTransform: 'none',
              fontSize: '1rem',
            }}
          >
            Login
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;