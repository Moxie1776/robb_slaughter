import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import {
  Button,
  Container,
  Icon,
  Link,
  List,
  ListItem,
  ListItemIcon,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SvgIconStyle from '../components/SvgIconStyle';

// ----------------------------------------------------------------------

export default function Contact() {
  const navigate = useNavigate();

  return (
    <Container maxWidth='md'>
      <Stack alignContent='center'>
        <Paper sx={{ m: 3, p: 3 }}>
          <Typography color='primary' variant='h4' align='left' sx={{ px: 2 }}>
            Contact Information
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <FacebookIcon color='secondary' />
              </ListItemIcon>
              <Link
                color='inherit'
                variant='body1'
                underline='none'
                target='_blank'
                href='https://www.facebook.com/slaughter4commissioner/'
                sx={{ py: 1 }}
              >
                Facebook - Robb Slaughter 4 commissioner
              </Link>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneAndroidIcon color='primary' />
              </ListItemIcon>
              <Typography variant='body1' mb={2} mt={1}>
                Cell Phone - 307-371-4324
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Icon color='secondary'>
                  <SvgIconStyle src={`/icons/venmo.svg`} />
                </Icon>
              </ListItemIcon>
              <Link
                color='inherit'
                variant='body1'
                underline='none'
                target='_blank'
                href='https://account.venmo.com/u/slaughter4commissioner'
                sx={{ py: 1 }}
              >
                Venmo - @slaughter4commissioner
              </Link>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailIcon color='primary' />
              </ListItemIcon>
              <Link
                color='inherit'
                variant='body1'
                underline='none'
                href='mailto:robbslaughter@yahoo.com'
                sx={{ py: 1 }}
              >
                robbslaughter@yahoo.com
              </Link>
            </ListItem>
          </List>
          <Button
            size='small'
            onClick={() => navigate('/')}
            sx={{ justifyContent: 'start' }}
          >
            Learn More
          </Button>
        </Paper>
      </Stack>
    </Container>
  );
}
