import { Button, Container, Paper, Stack } from '@mui/material';
import Image from 'mui-image';
import { useNavigate } from 'react-router-dom';

export default function Bio() {
  const navigate = useNavigate();

  return (
    <Container maxWidth='md'>
      <Stack>
        <Paper sx={{ m: 3, p: 3 }}>
          <h2>
            Mini Biography
            <Image
              height={200}
              duration={500}
              width={200}
              src='/images/robb.jpeg'
            />
          </h2>
          <p>
            Robb is a Sweetwater County Native, born in Rock Springs, Wyoming.
            His early life was spent learning the value of hard work and family
            from his father and mother, Dee and Elaine Slaughter. He grew up on
            the north side of Green River with one brother Brad U Slaughter.
          </p>
          <p>
            Robb graduated from Green River High School in 1978. He then moved
            on to further his education at the University of Wyoming, graduating
            with a Bachelor of Science degree in Business Management and
            Administration. To support his education, Slaughter worked one
            summer for the Union Pacific Railroad and three summers at Stauffer
            Chemical Company. It was during this experience that he learned the
            value of industry to the local economy.
          </p>
          <p>
            In 1979, Slaughter walked on to qualify for the UW golf team. In
            1980 he was awarded a scholarship and became a three year letterman.
            Upon graduation in 1983 he was hired as the Head Golf Professional
            at the Laramie Country Club. Fulfilling a major goal in his life, he
            was hired at Rolling Green Country Club in Green River in 1984.
            Slaughter worked as the Head Professional there through the 1988
            season.
          </p>
          <p>
            November 1988, he was approached by, Betsy Sue Peverly, the
            Sweetwater County Treasurer and offered the job as the Chief Deputy
            in the County Treasurers office. He served as Chief Deputy until
            Peverly’s retirement in 1993. In March of 1993, Slaughter was
            appointed to fill the unexpired portion of Peverly’s term. He ran
            for election in 1994 and served seven terms as Treasurer before
            retiring in July 2021.
          </p>
          <p>
            Slaughter and his wife Marriella live in Green River. They have six
            Children, Shane, Kristy, Erin, Brett, Sean and Megan and multiple
            grandchildren. They have two dogs Annie and Nellie. Robb is a member
            of the Church of Jesus Christ of Latter-day Saints.
          </p>
          <Button
            size='small'
            onClick={() => navigate('/contact')}
            sx={{ justifyContent: 'start' }}
          >
            Learn More
          </Button>
        </Paper>
      </Stack>
    </Container>
  );
}
