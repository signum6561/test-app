import { TextField, Button, Link } from '@mui/material';

const Recovery = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500'>
      <div className='min-w-96 w-[450px] px-10 py-10 shadow-xl rounded-lg bg-white'>
        <p className='text-3xl font-bold text-center mb-2.5'>Reset Password</p>
        <p className='text-base text-justify italic'>
          Please enter your email address. You will receive a link to create a
          new password via email.
        </p>
        <form className='w-full'>
          <TextField
            margin='normal'
            fullWidth
            label='Email'
            required
            variant='standard'
          />
          <Button sx={{ mt: 3 }} type='submit' fullWidth variant='contained'>
            Submit
          </Button>
        </form>
        <div className='text-center'>
          <Link fullWidth href='/login' variant='body2' underline='none'>
            Remember password? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
