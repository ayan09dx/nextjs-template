import React, {useState} from "react"
import { useRouter } from "next/router"
import {  absoluteUrl,getAppCookies,verifyToken} from '../utils/jwthandler';

export default function Home(props){
  const [load,setLoad]=useState(false)
  const router=useRouter();

  React.useEffect(()=>{
    if(props.profile!==''){
        setLoad(true)
    }
    else{
      router.push('/login')
    }
},[])
  return(
    load?
    <></>
    :<></>
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