import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import superagent from 'superagent';
import base64 from 'base-64';
import axios from 'axios';



export const LoginContext = React.createContext();

export default function LoginProvider(props) {

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  

  const canDo = (capability) => {
    // optional chaining 
    return user.user?.capabilities?.includes(capability);
  }


  // Basic encoded(username:password) >> Basic eW=hdtgsjs
  const login = async (username, password) => {
    // localhost:3030/signin
    const response = await superagent.post(`http://localhost:3003/signin`)
      .set('authorization', `Basic ${base64.encode(`${username}:${password}`)}`);
    console.log('inside login >> response', response);//userInfo + token

    ValidateMyUser(response.body)
  }

  const signUp = async (username, password, role,email,phone) => {
    const userReqBody = {
      username: username,
      password: password,
      role: role,
      email:email,
      phone:phone,
    }
    const response = await superagent.post(`http://localhost:3003/signup`, userReqBody)
    console.log('inside signup :::', response.body); //userInfo + token
    ValidateMyUser(response.body)



  }

  const ValidateMyUser = (data) => {
    console.log("data::::", data);
    if (data) {
      const validUser = jwt.decode(data.token);
      if (validUser) {
        setLoginstate(true, data);
        cookie.save('userData', data);
        console.log('userData', data);
      } else {
        setLoginstate(false, {})
      }
    } else {
      setLoginstate(false, {})
    }
  }

  const setLoginstate = (isLogged, userData) => {
    setLoggedIn(isLogged);
    setUser(userData);
    console.log("isLogged", isLogged);
    console.log("user record", userData);

  }


  const logout = () => {
    setLoggedIn(false);
    setUser({});
    cookie.remove('userData');
  }


  // ---- to take user data from cookies even when refresh the page ----
  useEffect(() => {
    const myUserInfo = cookie.load('userData');
    ValidateMyUser(myUserInfo);
  }, [])


  const allStates = {
    loggedIn: loggedIn,
    user: user,
    login: login,
    logout: logout,
    canDo: canDo,
    signUp: signUp
  }


  return (
    <LoginContext.Provider value={allStates}>
      {props.children}
    </LoginContext.Provider >

  )

}

