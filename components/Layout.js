import React, {useState,useEffect } from 'react';
import Header from './Header'
import Footer from './Footer'


export default function Layout({children}){
const [load,setLoad]=useState(false);

useEffect(()=>{
    if(children[1].props.profile==='' || children[1].props.profile===null ){
        setLoad(false)
    }
    else{
        setLoad(true)
    }
},[children])

   
    return(
        load?
        <div>
            <Header/>
            <div className="main" style={{marginTop:85}}>{children}</div>
            <Footer/>     
        </div>
        :<div className="main">{children}</div>
    );
    }
    