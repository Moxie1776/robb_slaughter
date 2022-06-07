import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { Container, Icon, Link, Stack, Typography } from '@mui/material';
import SvgIconStyle from '../components/SvgIconStyle';

// ----------------------------------------------------------------------

export default function Contact() {
  return (
    <Container maxWidth='md'>
      <Stack alignContent='center'>
        <Typography mb={2} variant='h4' component='h2' sx={{ my: 4 }}>
          Contact Information
        </Typography>
        <EmailIcon color='primary' />
        <Link
          underline='none'
          href='mailto:robbslaughter@yahoo.com'
          sx={{ py: 1 }}
        >
          robbslaughter@yahoo.com
        </Link>
        <FacebookIcon color='secondary' />{' '}
        <Link
          underline='none'
          target='_blank'
          href='https://www.facebook.com/slaughter4commissioner/'
          sx={{ py: 1 }}
        >
          Facebook - Robb Slaughter 4 commissioner
        </Link>
        <PhoneAndroidIcon color='primary' />
        <Typography mb={2} mt={1}>
          Cell Phone - 307-371-4324
        </Typography>
        <Icon color='secondary'>
          <SvgIconStyle src={`/icons/venmo.svg`} />
        </Icon>
        <Link
          underline='none'
          target='_blank'
          href='https://account.venmo.com/u/slaughter4commissioner'
          sx={{ py: 1 }}
        >
          Venmo - @slaughter4commissioner
        </Link>
      </Stack>
    </Container>
  );
}
