import React,{useEffect, useState} from "react";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
function App() {
  const [loginValid,setLoginValid]= useState(false); 
  const [userDataObj,setUserDataObj]= useState({email:'',password:''});
  const userLoginDataToken = localStorage.getItem('isLoggedIn');
  useEffect(() => {
    if(userLoginDataToken === '1'){
      setLoginValid(true);
    }
  },[userLoginDataToken]);
 
  const loginValidHandler = (email,password) => {
    setLoginValid(true);
    setUserDataObj({email:email,password:password});
    localStorage.setItem('isLoggedIn','1');
  }
  const logoutValidHandler = () =>{
    setLoginValid(false);
  }
  
  return (
  <React.Fragment>
    {loginValid === false ?   <Login loginData = {loginValidHandler}/> : <Home logoutData={logoutValidHandler} useData = {userDataObj}/>}
  </React.Fragment>
  )
    
}

export default App;
