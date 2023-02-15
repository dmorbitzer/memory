import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';

function LoginForm(
  {
    handleSubmit,
    handleChange,
    errorMessage,
    handleOnClick,
  },
) {
  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container sx={{ paddingBottom: '15px' }}>
        {
          errorMessage
          && <Alert sx={{ width: '100%', marginTop: '1rem', textAlign: 'left' }} severity="error">{errorMessage}</Alert>
        }
      </Grid>
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
            onChange={handleChange}
          />

        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Login
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Button
            variant="text"
            onClick={handleOnClick}
            sx={{
              textTransform: 'none',
            }}
          >
            Don&apos;t have an account? Register now
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  handleOnClick: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  errorMessage: null,
};

export default LoginForm;
