import StarIcon from '@mui/icons-material/Star';
import {
  Button,
  Container,
  List,
  ListItem,
  ListItemIcon,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Endorsments() {
  const navigate = useNavigate();

  return (
    <Container maxWidth='md'>
      <Stack>
        <Paper sx={{ m: 3, p: 3 }}>
          <Typography color='primary' variant='h4' align='left'>
            Endorsments
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <StarIcon color='primary' />
              </ListItemIcon>
            </ListItem>
          </List>

          <Button
            size='small'
            onClick={() => navigate('/contact')}
            sx={{ justifyContent: 'start', mx: 2 }}
          >
            Learn More
          </Button>
        </Paper>
      </Stack>
    </Container>
  );
}
