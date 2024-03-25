import { createContext, useEffect, useState } from "react";

export let tokenContext = createContext()

export default function TokenContextProvider(props) {

  let [token, setToken] = useState(null)

  // if (localStorage.getItem("userToken") != null) {
  //   console.log(localStorage.getItem("userToken"))
  //   // setToken(localStorage.getItem("userToken"))
  // } else {
  //   return
  // }

  useEffect(() => {
    if (localStorage.getItem("userToken") != null) {
      setToken(localStorage.getItem("userToken"))
      
    }
  }, [localStorage.getItem("userToken")])


  return <tokenContext.Provider value={{ token }}>{props.children}</tokenContext.Provider>
}
