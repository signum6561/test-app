import {
  Button,
  Grid,
  Link,
  TextField,
  Checkbox,
  FormControlLabel,
} from '@mui/material';

const Login = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500'>
      <div className='min-w-96 w-[450px] px-10 py-10 shadow-xl rounded-lg bg-white'>
        <p className='text-4xl font-bold text-center mb-2.5'>Login</p>
        <form className='w-full'>
          <TextField
            margin='normal'
            fullWidth
            label='Email'
            required
            variant='standard'
          />
          <TextField
            margin='normal'
            type='password'
            fullWidth
            label='Password'
            required
            variant='standard'
          />
          <FormControlLabel
            sx={{ mt: 2 }}
            control={<Checkbox color='primary' />}
            label='Remember me'
          />
          <Button type='submit' fullWidth variant='contained'>
            Sign in
          </Button>
        </form>
        <Grid container>
          <Grid item xs>
            <Link href='/recovery' variant='body2' underline='none'>
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href='/register' variant='body2' underline='none'>
              {"Don't have an account?"}
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Login;
