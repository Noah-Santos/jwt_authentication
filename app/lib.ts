import {SignJWT, jwtVerify} from 'jose';
import {cookies} from 'next/headers';
import {NextRequest, NextResponse} from 'next/server';

const secretKey = 'secret';
const key = new TextEncoder().encode(secretKey); //encodes the secretKey

// encrypt data
export async function encrypt(payload:any){
    return await new SignJWT(payload)
    .setProtectedHeader({alg:'HS256'})
    .setIssuedAt()
    .setExpirationTime('20 sec')
    .sign(key)
}

// decrypt data
export async function decrypt(input:string): Promise<any>{
    const {payload} = await jwtVerify(input, key, {algorithms: ['HS256']});
    return payload
}