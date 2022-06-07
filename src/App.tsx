import StarIcon from '@mui/icons-material/Star';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import SvgIconStyle from './components/SvgIconStyle';

export default function App() {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Container maxWidth='md'>
      <Typography color='primary' variant='h3' align='center' sx={{ mt: 4 }}>
        Rob Slaughter 4 Commissioner
      </Typography>
      <Grid container spacing={3} sx={{ pt: 4 }}>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              backgroundColor: theme.palette.secondary.main,
              font: { color: 'white' },
              px: 2,
              py: 1,
            }}
          >
            <Typography
              color={theme.palette.info.main}
              align='center'
              sx={{ fontSize: 24, font: { color: 'white' } }}
            >
              Positive
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              backgroundColor: theme.palette.primary.main,
              font: { color: 'white' },
              px: 2,
              py: 1,
            }}
          >
            <Typography
              color={theme.palette.info.main}
              align='center'
              sx={{ fontSize: 24, font: { color: 'white' } }}
            >
              Proactive
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              backgroundColor: theme.palette.secondary.main,
              font: { color: 'white' },
              px: 2,
              py: 1,
            }}
          >
            <Typography
              color={theme.palette.info.main}
              align='center'
              sx={{ fontSize: 24, font: { color: 'white' } }}
            >
              Leadership
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <Box sx={{ minWidth: 275 }}></Box>
        </Grid>
      </Grid>
      <Typography color='primary' variant='h4' align='center'>
        <Icon color='primary'>
          <SvgIconStyle src={`/icons/republican.svg`} />
        </Icon>{' '}
        Republican Candidate for County Commissioner
      </Typography>
      <Stack>
        <Card variant='outlined' sx={{ m: 2 }}>
          <CardContent>
            <p>
              My objective as a County Commissioner is to provide a positive,
              proactive approach to local government.
            </p>

            <p>
              To represent <strong>ALL</strong> county residents.
            </p>
            <p>
              I have a skill set that is tailor-made to provide this leadership.
            </p>

            <List>
              <ListItem>
                <ListItemIcon>
                  <StarIcon color='primary' />
                </ListItemIcon>
                Sweetwater county Native
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon color='secondary' />
                </ListItemIcon>
                Understand and have been a part of the local nature and culture
                of Sweetwater County my entire life
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon color='primary' />
                </ListItemIcon>
                34 years of experience with local government leadership and
                interaction
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon color='secondary' />
                </ListItemIcon>
                Full knowledge of the County budget and where the County’s
                revenues are derived and major expenditures occur
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon color='primary' />
                </ListItemIcon>
                Willing to make tough decisions, in a timely manner
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon color='secondary' />
                </ListItemIcon>
                Understand the importance of relationships with other local and
                municipal leaders
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon color='primary' />
                </ListItemIcon>
                Have strong existing relationships with State and local leaders
                and other local leaders in our community
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon color='secondary' />
                </ListItemIcon>
                Seek transparency and better communications on all levels
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon color='primary' />
                </ListItemIcon>
                Vast Mineral tax and motor vehicle expertise
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon color='secondary' />
                </ListItemIcon>
                Desire to see Sweetwater County Thrive
              </ListItem>
            </List>
          </CardContent>
          <CardActions>
            <Button size='small' onClick={() => navigate('/values')}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Stack>
    </Container>
  );
}
