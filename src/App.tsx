import {
  Box,
  BoxProps,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Stack,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        display: 'inline',
        fontWeight: 'bold',
        ...sx,
      }}
      {...other}
    />
  );
}

export default function App() {
  const navigate = useNavigate();

  return (
    <Container maxWidth='md'>
      <Grid container spacing={3} sx={{ p: 4 }}>
        <Grid item xs={12} md={4}>
          <div>
            <Card sx={{ px: 2, py: 1 }}>
              <Item sx={{ fontSize: 48 }}>P</Item>
              <Item sx={{ fontSize: 32 }}>roactive</Item>
            </Card>
          </div>
        </Grid>

        <Grid item xs={12} md={4}>
          <div>
            <Card sx={{ px: 2, py: 1 }}>
              <Item sx={{ fontSize: 48 }}>P</Item>
              <Item sx={{ fontSize: 32 }}>ositive</Item>
            </Card>
          </div>
        </Grid>

        <Grid item xs={12} md={4}>
          <div>
            <Card sx={{ px: 2, py: 1 }}>
              <Item sx={{ fontSize: 48 }}>L</Item>
              <Item sx={{ fontSize: 32 }}>eadership</Item>
            </Card>
          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <Box sx={{ minWidth: 275 }}></Box>
        </Grid>
      </Grid>
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

            <ul>
              <li>Sweetwater county Native </li>
              <li>
                Understand and have been a part of the local nature and culture
                of Sweetwater County my entire life
              </li>
              <li>
                34 years of experience with local government leadership and
                interaction
              </li>
              <li>
                Full knowledge of the County budget and where the County’s
                revenues are derived and major expenditures occur
              </li>
              <li>Willing to make tough decisions, in a timely manner</li>
              <li>
                Understand the importance of relationships with other local and
                municipal leaders
              </li>
              <li>
                Have strong existing relationships with State and local leaders
                and other in our community
              </li>
              <li>Seek transparency and better communications on all levels</li>
              <li>Vast Mineral tax and motor vehicle expertise</li>
              <li>Desire to see Sweetwater County Thrive</li>
            </ul>
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
