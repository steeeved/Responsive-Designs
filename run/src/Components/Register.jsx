import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState, useRef } from 'react';

const Register = () => {
  const [isError, setIsError] = useState(true);
  const [x, setX] = useState();

  const schema = yup.object().shape({
    Username: yup.string().required('Username is required'),
    Password: yup.string().required('Password is required'),
    ConfirmPassword: yup
      .string()
      .required('Please confirm your password')
      .oneOf([yup.ref('Password'), null], 'Passwords must match')
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    if (
      errors.Username?.message === undefined &&
      errors.Password?.message === undefined &&
      errors.ConfirmPassword?.message === undefined
    ) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  }, [
    errors.Username?.message,
    errors.Password?.message,
    errors.ConfirmPassword?.message
  ]);

  const onSubmit = (data) => {
    window.localStorage.setItem('user', JSON.stringify(data));
  };

  const btnDivRef = useRef(null);
  const buttonRef = useRef(null);

  const X1 = buttonRef.current?.getBoundingClientRect().x;
  const X2 =
    buttonRef.current?.getBoundingClientRect().x +
    buttonRef.current?.getBoundingClientRect().width;

  function playAround(e) {
    const x = e.clientX;
    const width = X2 - X1;

    if (isError) {
      buttonRef.current.style.background = 'red';
      buttonRef.current.style.cursor = 'not-allowed';
    } else {
      buttonRef.current.style.background = 'green';
      buttonRef.current.style.cursor = 'pointer';
    }

    if (isError) {
      // change the color of the button to red
      if (x - X2 < 10 && x - X2 > -width / 2 && x - X1 > 0) {
        setX(x - X2 - 50);
      }
      if (x - X1 > -10 && x - X1 < width / 2 && x - X2 < 0) {
        setX(x - X1 + 50);
      }
      if (x - X1 < 10) {
        setX(x + 50 - X1);
      }
      if (x - X2 > -10) {
        setX(x - 50 - X2);
      }
    }
  }

  return (
    <div className='register'>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' placeholder='Username' {...register('Username')} />
        <p>{errors.Username?.message}</p>
        <input
          type='password'
          placeholder='Password'
          {...register('Password')}
        />
        <p>{errors.Password?.message}</p>
        <input
          type='password'
          placeholder='Confirm Password'
          {...register('ConfirmPassword')}
        />
        <p>{errors.ConfirmPassword?.message}</p>
        <div className='button' ref={btnDivRef} onMouseMove={playAround}>
          <button ref={buttonRef} style={{ left: `${x}px` }}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
