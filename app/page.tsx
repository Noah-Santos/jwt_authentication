import Image from 'next/image';
import {redirect} from 'next/navigation';
import {getSession, login, logout} from './lib';
import styles from './Styles/login.module.css';

export default async function Login() {
  const session = await getSession();
  return (
    <section className={styles.cont}>
      <form className={styles.form} action={async (formdata)=>{
        'use server';
        if(await login(formdata)){
          redirect('/home');
        }
      }}>
        <input type="email" name="email" id='email' placeholder='Email' className={styles.input}/>
        <input type="password" name="password" id="password" placeholder='Password' className={styles.input}/>
        <button type="submit" className={styles.button}>Login</button>
      </form>

    </section>
  );
}
