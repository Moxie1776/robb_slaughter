import { Button, Container, Paper, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Values() {
  const navigate = useNavigate();

  return (
    <Container maxWidth='md'>
      <Stack>
        <Paper sx={{ m: 3, p: 3 }}>
          <h2>What Are My Values?</h2>

          <ul>
            <li>
              I believe all people are created equally and as that they should
              all be treated with respect.
            </li>
            <li>
              I believe and support the Constitution of the United States.
            </li>
            <li>
              I believe everyone has the right to their own spiritual faith. As
              such, their rights to religious practices should be protected.
            </li>
            <li>
              I believe the United States of America is the best country in the
              world and that its form of Government is the model that all
              nations should subscribe to.
            </li>
            <li>I believe in the value of the family.</li>
            <li>
              I believe all immigrants should be granted a path to citizenship.
              Anyone who desires to meet the required steps should be accepted.
              However it is critical that we protect our borders from
              infringement by any non-citizen.
            </li>
            <li> I believe in the need for public and national safety.</li>
            <li> I support our law enforcement and our Military.</li>
            <li>
              {' '}
              I believe that once a child is conceived it is a viable human
              being.{' '}
            </li>
            <li>
              I believe in the 2nd Amendment and whole heartedly support our
              citizen’s rights to keep and bear arms.
            </li>
            <li>
              I believe in smaller government involvement and no more taxes than
              necessary. Taxes collected must be used for the benefit of the
              people.
            </li>
          </ul>
          <Button
            size='small'
            onClick={() => navigate('/bio')}
            sx={{ justifyContent: 'start', mx: 2 }}
          >
            Learn More
          </Button>
        </Paper>
      </Stack>
    </Container>
  );
}
