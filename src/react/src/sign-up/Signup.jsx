import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';

function SignUp() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState(<p />);
  const [formValues, setFormValues] = React.useState({
    username: {
      value: '',
      error: false,
      errorMessage: 'You must enter a username',
    },
    email: {
      value: 21,
      error: false,
      errorMessage: 'You must enter an email',
    },
    password: {
      value: '',
      error: false,
      errorMessage: 'You must enter a password',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const validRegex = /.+@.+\..+/;
    const formFields = Object.keys(formValues);
    let newFormValues = { ...formValues };
    const index = formFields.indexOf(name);
    const currentField = formFields[index];
    const currentTextContent = e.target.labels[0].textContent;
    const currentLabel = currentTextContent.substring(0, currentTextContent.length - 2);
    if (value === '') {
      newFormValues = {
        ...newFormValues,
        [currentField]: {
          ...newFormValues[currentField],
          error: true,
          errorMessage: `You must enter a ${currentLabel}`,
        },
      };
      setFormValues(newFormValues);
    } else if (value !== '') {
      newFormValues = {
        ...newFormValues,
        [currentField]: {
          ...newFormValues[currentField],
          error: false,
        },
      };
      setFormValues(newFormValues);
    }
    if (name === 'password' && value.length < 5 && value.length > 0) {
      newFormValues = {
        ...newFormValues,
        [currentField]: {
          ...newFormValues[currentField],
          error: true,
          errorMessage: 'Your Password is to short',
        },
      };
      setFormValues(newFormValues);
    }
    if (name === 'email' && !value.match(validRegex) && value.length > 0) {
      newFormValues = {
        ...newFormValues,
        [currentField]: {
          ...newFormValues[currentField],
          error: true,
          errorMessage: `No valid ${currentLabel}`,
        },
      };
      setFormValues(newFormValues);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget).entries())),
    };
    fetch('/api/auth/register', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (Object.keys(data).length) {
          navigate('/login');
        }
      })
      .catch((error) => {
        setErrorMessage(<Alert severity="error">{error.message}</Alert>);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="username"
                name="username"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                helperText={formValues.username.error && formValues.username.errorMessage}
                error={formValues.username.error}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                helperText={formValues.email.error && formValues.email.errorMessage}
                error={formValues.email.error}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                helperText={formValues.password.error && formValues.password.errorMessage}
                error={formValues.password.error}
                onChange={handleChange}
              />

            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="confirmWait" color="primary" required />}
                label="I am aware that my registration needs to be confirmed by an administrator and hence will take up to 3 days."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
          <Grid container>
            {errorMessage}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default SignUp;
