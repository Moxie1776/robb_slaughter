import { AppBar, Box, Button, Toolbar, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Image from 'mui-image';
import { useNavigate } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  position: 'absolute',
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 120,
  },
}));

export default function ProminentAppBar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const navigate = useNavigate();

  return (
    <Box>
      <AppBar position='static'>
        <Image
          src='/images/boarsTusk.png'
          duration={500}
          fit='contain'
          style={{
            position: 'relative',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        />
        <StyledToolbar sx={{ flexGrow: 1 }}>
          <Button
            color='primary'
            size={matches ? 'large' : 'small'}
            variant='text'
            onClick={() => navigate('/')}
          >
            Home
          </Button>

          <Button
            color='primary'
            size={matches ? 'large' : 'small'}
            variant='text'
            onClick={() => navigate('/values')}
          >
            Values
          </Button>
          <Button
            color='primary'
            size={matches ? 'large' : 'small'}
            variant='text'
            onClick={() => navigate('/bio')}
          >
            Bio
          </Button>
          <Button
            color='primary'
            size={matches ? 'large' : 'small'}
            variant='text'
            onClick={() => navigate('/contact')}
          >
            Contact
          </Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
