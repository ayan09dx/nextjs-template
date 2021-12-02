import React from 'react'
import { useSnackbar } from 'react-simple-snackbar'

export default function errorSnackbar(props) {
  //  console.log(props)
    const options = {
        position: 'bottom-center',
        style: {
          backgroundColor: 'red',
          border: 'none',
          color: 'white',
          fontSize: '16px',
          textAlign: 'center',
        },
        closeStyle: {
          color: 'lightcoral',
          fontSize: '16px',
        },
      }
  const [openSnackbar, closeSnackbar] = useSnackbar(options)
  React.useEffect(()=>{
    if(props.open)
    openSnackbar(props.msg)
  },[props.open])

  return (
    <>
      
    </>
  )
}
