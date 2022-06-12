import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Image from 'mui-image';
import { useState } from 'react';
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

const ProminentAppBar: React.FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          {!matches && (
            <IconButton
              id='basic-button'
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MenuIcon color='primary' />
            </IconButton>
          )}
          {!!matches && (
            <>
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
                onClick={() => navigate('/endorsments')}
              >
                Endorsments
              </Button>
              <Button
                color='primary'
                size={matches ? 'large' : 'small'}
                variant='text'
                onClick={() => navigate('/contact')}
              >
                Contact
              </Button>
            </>
          )}
        </StyledToolbar>
      </AppBar>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => navigate('/')}>Home</MenuItem>
        <MenuItem onClick={() => navigate('/values')}>Values</MenuItem>
        <MenuItem onClick={() => navigate('/bio')}>Bio</MenuItem>
        <MenuItem onClick={() => navigate('/endorsments')}>
          Endorsments
        </MenuItem>
        <MenuItem onClick={() => navigate('/contact')}>Contact</MenuItem>
      </Menu>
    </Box>
  );
};

export default ProminentAppBar;
