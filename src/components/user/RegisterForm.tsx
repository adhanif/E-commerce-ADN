import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import { UserRegister } from '../../misc/types';
import {
  useCheckUserMutation,
  useRegisterUserMutation,
} from '../../redux/userQuery';
import Loading from '../loading/Loading';

export default function UserForm() {
  const navigate = useNavigate();

  const [UserRegister] = useRegisterUserMutation();
  const [checkUser, { isLoading, data: data_, error, isSuccess }] =
    useCheckUserMutation();

  const notify = (message: string) => toast.success(message);
  const notifyError = (message: string) => toast.error(message);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<UserRegister>();

  //user login

  const handleRegister: SubmitHandler<UserRegister> = async (data) => {
    const response = await UserRegister(data);

    if ('data' in response) {
      notify('The user has registered successfully');
    }
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  // loading
  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      <Container maxWidth='sm'>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          height='100vh'
        >
          <Grid item xs={12}>
            <Box
              textAlign='center'
              paddingX='40px'
              paddingY='40px'
              sx={{
                border: '1px solid #ddd',
                borderRadius: '8px',
              }}
            >
              <Box textAlign='center'>
                <Typography variant='h4'>Sign up</Typography>
              </Box>
              <form onSubmit={handleSubmit(handleRegister)}>
                <Typography
                  variant='caption'
                  sx={{ color: 'red' }}
                  marginTop={1}
                  role='alert'
                >
                  {errors.name?.message}
                </Typography>

                <TextField
                  fullWidth
                  label='Name'
                  margin='normal'
                  variant='outlined'
                  {...register('name', {
                    required: 'Name is required',
                    maxLength: 20,
                    pattern: /^[A-Za-z\s]+$/i,
                  })}
                />

                <Typography
                  variant='caption'
                  sx={{ color: 'red' }}
                  marginTop={1}
                  role='alert'
                >
                  {errors.email?.message}
                </Typography>

                <TextField
                  fullWidth
                  label='Email'
                  margin='normal'
                  variant='outlined'
                  {...register('email', {
                    required: 'Email Address is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />

                <Typography
                  variant='caption'
                  sx={{ color: 'red' }}
                  marginTop={1}
                  role='alert'
                >
                  {errors.password?.message}
                </Typography>

                <TextField
                  fullWidth
                  label='Password'
                  margin='normal'
                  variant='outlined'
                  type='password'
                  {...register('password', {
                    required: 'Password is required',
                    minLength: 6,
                  })}
                />

                <Typography
                  variant='caption'
                  sx={{ color: 'red' }}
                  marginTop={1}
                  role='alert'
                >
                  {errors.avatar?.message}
                </Typography>

                <TextField
                  fullWidth
                  label='Avatar'
                  margin='normal'
                  variant='outlined'
                  {...register('avatar', {
                    required: 'Avatar link is required',
                    pattern: {
                      value: /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/i,
                      message: 'Invalid URL format',
                    },
                  })}
                />

                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  fullWidth
                  style={{ marginTop: '1rem', backgroundColor: 'black' }}
                >
                  {' '}
                  sign up
                </Button>
              </form>

              <Box
                textAlign='center'
                marginTop='1rem'
                display='flex'
                justifyContent='center'
                gap={1}
              >
                <Typography variant='body2'>
                  Already have an account?
                </Typography>
                <Link
                  underline='hover'
                  component='button'
                  onClick={() => {
                    navigate('/login');
                  }}
                >
                  <Typography variant='body2' fontWeight='bold'>
                    Log in now!
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
