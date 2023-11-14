"use client"

import styles from './loginForm.module.css';
import {useFormState} from 'react-dom';
import {authenticate} from '@/lib/actions/authenticate';

const LoginForm = () => {

  const [state,formAction] = useFormState(authenticate,undefined);

  return (
    <form action={formAction} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder='username' name="username" />
      <input type="password" placeholder='password' name="password" />
      <button>Login</button>
      {state && state}
    </form>
  )
};

export default LoginForm;