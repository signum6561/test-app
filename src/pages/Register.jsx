import { TextField, Button, Link } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useFormik } from 'formik';
import dayjs from 'dayjs';
import * as Yup from 'yup';

const Register = () => {
  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      birthday: null,
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      console.log(values.birthday.toString());
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(2, 'Mininum 2 characters')
        .required('Required!'),
      email: Yup.string().required('Required!'),
      password: Yup.string()
        .min(8, 'Minimum 8 characters')
        .required('Required!'),
      confirmPassword: Yup.string()
        .oneOf(
          [Yup.ref('password')],
          'Your password and confirm password must match',
        )
        .required('Required!'),
    }),
  });

  const { setFieldValue } = form;

  return (
    <div className='w-full h-screen flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500'>
      <div className='min-w-96 w-[450px] px-10 py-10 shadow-xl rounded-lg bg-white'>
        <p className='text-3xl font-bold text-center mb-2.5'>
          Create New Account
        </p>
        <form className='w-full' onSubmit={form.handleSubmit} noValidate>
          <TextField
            id='fullName'
            margin='dense'
            fullWidth
            label='Fullname'
            required
            variant='standard'
            value={form.values.fullName}
            onChange={form.handleChange}
            helperText={form.errors.fullName}
            error={form.errors.fullName}
          />
          <TextField
            id='email'
            margin='dense'
            fullWidth
            label='Email'
            required
            variant='standard'
            value={form.values.email}
            onChange={form.handleChange}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              id='birthday'
              label='Birthday'
              slotProps={{
                textField: {
                  variant: 'standard',
                  fullWidth: true,
                  required: true,
                  margin: 'dense',
                },
              }}
              value={form.values.birthday}
              onChange={(newValue) => setFieldValue('birthday', newValue)}
            />
          </LocalizationProvider>
          <TextField
            id='password'
            margin='dense'
            fullWidth
            label='Password'
            type='password'
            required
            variant='standard'
            value={form.values.password}
            onChange={form.handleChange}
          />
          <TextField
            id='confirmPassword'
            margin='dense'
            fullWidth
            label='Confirm Password'
            type='password'
            required
            variant='standard'
            value={form.values.confirmPassword}
            onChange={form.handleChange}
          />
          <Button sx={{ mt: 3 }} type='submit' fullWidth variant='contained'>
            Create
          </Button>
        </form>
        <div className='text-center'>
          <Link fullWidth href='/login' variant='body2' underline='none'>
            {'Already have an account?'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
