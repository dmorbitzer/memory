import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import { useEffect } from 'react';
import Store from '../redux/store';
import LoginForm from './LoginForm';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    if (Store.getState().authToken) {
      navigate('/menu');
    }
  });
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [formValues, setFormValues] = React.useState({
    username: {
      value: '',
    },
    password: {
      value: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const formFields = Object.keys(formValues);
    let newFormValues = { ...formValues };
    const index = formFields.indexOf(name);
    const currentField = formFields[index];
    newFormValues = {
      ...newFormValues,
      [currentField]: {
        ...newFormValues[currentField],
        value,
      },
    };
    setFormValues(newFormValues);
  };

  const getAlertMessage = (type) => {
    let alert;
    switch (type) {
      case 'register':
        alert = 'An account has been created for you. Please wait until you are unlocked.';
        break;
      case 'logout':
        alert = 'You have been logged out successfully.';
        break;
      default:
        alert = 'Success';
    }
    return alert;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    Store.dispatch({ type: 'SET_LOGIN_BANNER_INFO', payload: null });
    if (formValues.username.value !== '' && formValues.password.value !== '') {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget).entries())),
      };
      fetch('/webapp/api/auth/login', requestOptions)
        .then((response) => {
          if (response.status === 200) {
            return response.text();
          } else if (response.status === 422) {
            setErrorMessage('Invalid username or password');
          } else if (response.status === 403) {
            setErrorMessage('Your account has not been activated yet. Please try again later.');
          } else {
            setErrorMessage('We seem to have issues reaching our servers. Please try again later.');
          }
          return null;
        })
        .then((token) => {
          if (token) {
            Store.dispatch({ type: 'SET_AUTH_TOKEN', payload: token });
            navigate('/menu');
          }
        });
    } else {
      setErrorMessage('Please fill out form correctly');
    }
  };

  const handleOnClick = () => {
    navigate('/');
  };

  return (
    <Container
      spacing={1}
      sx={{
        backgroundColor: 'background.main',
      }}
      maxWidth="xl"
    >
      <Grid
        container
        spacing={1}
        sx={{
          justifyContent: 'center',
        }}
      >
        <Grid item xs={12} sm={5}>
          <Item className="items">
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  marginBottom: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                { Store.getState().loginBannerInfo
                  && (
                    <Alert
                      severity="success"
                      sx={{ marginBottom: '10px', fontSize: '0.875rem' }}
                    >
                      { getAlertMessage(Store.getState().loginBannerInfo) }
                    </Alert>
                  )}
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Login
                </Typography>
                <LoginForm
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  errorMessage={errorMessage}
                  handleOnClick={handleOnClick}
                />
              </Box>
            </Container>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
