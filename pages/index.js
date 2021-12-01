import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';
import {  absoluteUrl,getAppCookies,verifyToken,setLogout} from '../utils/jwthandler';
const SECRET_KEY = process.env.SECRET_KEY;

export default function Home(props) {
  const [username,setUserName]=useState('')
  const [password,setPassword]=useState('')
  const onSubmit=async()=>{
    let data={username:username,password:password}
    const res = await fetch('api/login', {
      method: 'post',
      body: JSON.stringify(data)
    })
    const json = await res.json()
    Cookies.set('token', json.token);
  }
  console.log(SECRET_KEY)
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',flexDirection:'column'}}>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" onChange={(e)=>setUserName(e.target.value)} value={username}/>
      <br/>
      <label htmlFor="password">Password</label>
      <input type="password" name="username" onChange={(e)=>setPassword(e.target.value)} value={password}/>
      <br/>
      <button onClick={onSubmit}>Sumit</button>
      <button onClick={(e)=>setLogout(e)}>logout</button>
      
    </div>
  )
}

export async function getServerSideProps(context) {
  const { req } = context;
  const { origin } = absoluteUrl(req);

  const baseApiUrl = `${origin}/api`;

  const { token } = getAppCookies(req);
  const profile = token ? verifyToken(token.split(' ')[1]) : '';
  return {
    props: {
      baseApiUrl,
      profile,
    },
  };
}