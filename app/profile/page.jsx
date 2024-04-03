import Image from 'next/image';
import {redirect} from 'next/navigation';
import {getSession, logout} from '../lib';

export default async function Profile() {
    const session = await getSession();
    return (
        <section>
            <form action={async ()=>{
                'use server';
                await logout();
                redirect('/');
            }}>
                <button type='submit'>Logout</button>
            </form>
            <pre>{JSON.stringify(session,null,2)}</pre>
        </section>
    );
}
