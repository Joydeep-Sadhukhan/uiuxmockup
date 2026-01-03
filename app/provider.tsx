"use client"
import { UserDetailsContext } from "@/context/UserDetailContext"
import axios from "axios"
import { useEffect, useState } from "react"

function Provider({children}:any) {
  const [userDetail, setUserDetail] = useState()

  useEffect(() => {
      CreateNewUser()
    }, [])

  const CreateNewUser = async () => {        

    const result = await axios.post('/api/user', {})

    console.log(result.data);
    setUserDetail(result?.data)
    
  }

  return (
    <UserDetailsContext.Provider value={{userDetail, setUserDetail}}>
    <div>{children}</div>
    </UserDetailsContext.Provider>
  )
}

export default Provider