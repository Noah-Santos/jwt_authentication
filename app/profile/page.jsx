import Image from 'next/image';
import {redirect} from 'next/navigation';
import {getSession, logout} from '../lib';
import styles from '../Styles/nav.module.css';
import Link from 'next/link';

export default async function Profile() {
    const session = await getSession();
    return (
        <section>
            <nav className={styles.navCont}>
                <h1 className={styles.title}>Profile</h1>
                <div className={styles.linkCont}>
                    <Link href='/home' className={styles.link}>Home</Link>
                    <Link href='/profile' onClick={async ()=>{
                        'use server';
                        await logout();
                        redirect('/');
                    }} className={styles.link}>Profile</Link>
                    <Link href='/' className={styles.link}>Logout</Link>
                </div>
            </nav>

            <pre>{JSON.stringify(session,null,2)}</pre>
        </section>
    );
}
