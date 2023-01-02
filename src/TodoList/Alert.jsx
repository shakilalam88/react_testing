import React,{useEffect} from 'react'

const Alert = ({type,msg,removAlert,list}) => {
    useEffect(() => {
      const timeout = setTimeout(()=>{
          removAlert()
      },3000)
      return ()=>clearTimeout(timeout)
    }, [list])
    
  return (
    <p className={`alert alert-${type}`}>{msg}</p>
  )
}

export default Alert