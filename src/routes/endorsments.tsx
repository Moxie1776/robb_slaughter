import {
  Box,
  Button,
  Container,
  Divider,
  Link,
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

          <Box>
            <p>
              It is with pleasure that I am writing in support of Robb Slaughter
              as one of our next County Commissioners. I have known Robb for
              some 50 years. I serve with Robb on the Board of Directors at
              Rolling Green Country Club and had many discussions with him in
              his position as County Treasurer for Sweetwater County. He is a
              dedicated and committed individual that will represent the people
              of Sweetwater County to the best of his abilities. His experience
              as a former County Treasurer provides valuable knowledge for the
              needs of the this position.
            </p>
            <p>
              I can not think of a better candidate to be our County
              Commissioner.
            </p>
            <p>Pete Kalivas</p>
          </Box>

          <Divider orientation='horizontal' />

          <Box>
            <p>
              I have lived and worked with local elected officials for the past
              37 years in Sweetwater County. One of the most honest and hard
              working elected official was Robb Slaughter. I was dismayed when
              Robb retired from the Treasurer's office, knowing they would be
              big shoes to fill. As dismayed as I was, I was equally excited
              when Robb decided to run for the County Commission. He's honest,
              he will work hard for Sweetwater County, he will be available to
              the voters, and will do his homework. Join me and vote for Robb
              Slaughter for Sweetwater County Commission.
            </p>
            <p>Steve Core</p>
          </Box>

          <Divider orientation='horizontal' />

          <Box>
            <p>
              First of all, I want to thank our current Commissioners for their
              years of service.
            </p>
            <p>
              As a long term resident of Sweetwater County, I recognize the
              unique challenges that we are currently facing that will affect us
              for years to come. We need qualified and dedicated individuals in
              critical government positions to make decisions that will not only
              help us now, but into the future. These decisions will affect
              generations to come.
            </p>
            <p>
              I have known Robb Slaughter for many years. I know him to be a
              dedicated, knowledgeable and qualified individual for the position
              of County Commissioner. I have worked with Robb in many capacities
              and have grown to respect and appreciate his hard work and
              dedication. He is completely dedicated to Sweetwater County and
              its residents. I know that Robb will work together with the other
              Commissioners and County entities to make decisions that are in
              our best interest. He will not back away from difficult
              discussions or decisions that will ensure a brighter future for
              us.
            </p>
            <p>
              Please join me in voting for Robb Slaughter for Sweetwater County
              Commissioner.
            </p>
            <p>
              Sincerely,
              <br />
              David Young
            </p>
          </Box>

          <Divider orientation='horizontal' />

          <Box>
            <p>To the citizens of Sweetwater County:</p>
            <p>
              I am writing today to encourage the voters of Sweetwater County to
              strongly consider Robb Slaughter for County Commissioner.
            </p>
            <p>
              I am the retired Fremont County Treasurer where I worked with Robb
              Slaughter for over 30 years in county government. I do not know,
              nor do I pretend to understand the current issues in Sweetwater
              County, but I feel compelled to bring to light the fact that
              County Commissioners often affect policy decisions statewide,
              which is why I am writing this letter today.
            </p>
            <p>
              As a former County Treasurer, Robb was very involved with
              legislation and policy decisions that affected the everyday
              workings of county government and more importantly its local
              citizens. We worked side by side on many issues; speaking with
              legislators from around the state and state bureaucrats that in
              some cases were making decisions that would have enormous impacts
              on citizens that these officials and agencies had not considered.
              Robb was always well versed and prepared to explain the
              complications of proposals to head off costly impacts before they
              happened.
            </p>
            <p>
              As the former County Treasurer, Robb understands the finances, the
              accounting, the structure of county government, and the experience
              and importance of the county employees. Most importantly, he will
              value the input of all other county elected officials.
            </p>
            <p>
              Given Robb's experience in dealing with the state, his over 30
              years of administering county government, and his lifelong
              residency in Sweetwater County, Robb will make a fine county
              commissioner and hit the ground running. Again please vote, and
              vote for Robb Slaughter for Sweetwater County Commissioner.
            </p>
            <p>Sincerely,</p>

            <p>
              H. Scott Harnsberger
              <br /> 3 Carbine LN
              <br /> Lander, WY 82520
              <br /> 307-349-5955
              <br />
              <Link
                color='inherit'
                variant='body1'
                underline='none'
                href='mailto:goppoke@gmail.com'
                sx={{ py: 1 }}
              >
                goppoke@gmail.com
              </Link>
            </p>
          </Box>

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
