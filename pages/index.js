import React, {useState} from "react"
import { useRouter } from "next/router"
import {  absoluteUrl,getAppCookies,verifyToken} from '../utils/jwthandler';
import ErrorSnackbar from '../utils/errorSnackbar'
import SuccessSnackbar from '../utils/successSnackbar'
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
    <><ErrorSnackbar /><SuccessSnackbar open={true} msg="Success"/></>
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