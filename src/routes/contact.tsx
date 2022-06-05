import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import {
  Box,
  BoxProps,
  Container,
  Icon,
  Link,
  Stack,
  Typography,
} from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  src: string;
}

const SvgIconStyle = ({ src, sx }: Props) => {
  return (
    <Box
      component='span'
      sx={{
        width: 32,
        height: 32,
        display: 'inline-block',
        bgcolor: 'currentColor',
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        ...sx,
      }}
    />
  );
};

export default function Contact() {
  return (
    <Container maxWidth='md'>
      <Stack alignContent='center'>
        <Typography mb={2} variant='h4' component='h2' sx={{ my: 4 }}>
          Contact Information
        </Typography>
        <EmailIcon color='secondary' />
        <Link
          underline='none'
          href='mailto:robbslaughter@yahoo.com'
          sx={{ py: 1 }}
        >
          robbslaughter@yahoo.com
        </Link>
        <FacebookIcon color='info' />{' '}
        <Link
          underline='none'
          target='_blank'
          href='https://www.facebook.com/slaughter4commissioner/'
          sx={{ py: 1 }}
        >
          Facebook - Robb Slaughter 4 commissioner
        </Link>
        <PhoneAndroidIcon color='secondary' />
        <Typography mb={2} mt={1}>
          Cell Phone - 307-371-4324
        </Typography>
        <Icon color='info'>
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
