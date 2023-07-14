import React, { useContext, useState } from 'react';
import { LoginContext } from './context';
import { Button, Form } from 'react-bootstrap';
import { When } from 'react-if';

export default function Login() {
  const ContextLogin = useContext(LoginContext);

  let [userInputs, setIuserInputs] = useState({})
  // const [flip, setFlip] = useState(false);


  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    console.log('name', name);
    console.log('name', value);

    setIuserInputs((prevalue) => {
      console.log('prevalue', prevalue);
      return {
        ...prevalue,   // Spread Operator              
        [name]: value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('userinputs:', userInputs);
    ContextLogin.login(userInputs.username, userInputs.password);
  };
  //   const signUpubmit = (e) => {
  //     e.preventDefault();
  //     ContextLogin.signUp(userInputs.username, userInputs.password, userInputs.role);
  //   };

  // function flipFunction() {
  //   setIuserInputs({});
  //   setFlip(true);
  // }
  // function restflipFunction() {
  //   setIuserInputs({});
  //   setFlip(false);
  // }

  return (
    <>
    {console.log('user input', userInputs)}


  
            <div style={{ marginRight: "300px", marginLeft: "300px" }}>
                <h1>Login Form</h1>

                <When condition={ContextLogin.loggedIn}>
                    <button onClick={ContextLogin.logout}>Log Out</button>
                </When>

                <When condition={!ContextLogin.loggedIn}>
                    <Form onSubmit={handleSubmit}>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username:</Form.Label>
                            <Form.Control placeholder="UserName"
                                name="username"
                                type="text"
                                onChange={handleChange} />
                        </Form.Group>

                        <br />

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password :</Form.Label>
                            <Form.Control placeholder="password"
                                name="password"
                                type="password"
                                onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <br />
                        <Button variant="primary" type="submit">
                            Login
                        </Button>

                        {console.log("logeed??", ContextLogin.loggedIn)}
                        {ContextLogin.loggedIn && <a href="/">Home</a>
                        }

                        {/* <p className="message">
                            Don't have an account ?{" "}
                            <a href="/Signup">
                                Sign up
                            </a>
                        </p> */}

                        {/* <p className="message">
                            Don't have an account ?{" "}
                            <a onClick={() => props.restflipFunction(true)} href="/#">
                                Sign up
                            </a>
                        </p> */}

                    </Form>
                </When>

            </div>

      {/* {flip === false ? (       */}

      {/* <SignUp
      signUpubmit={signUpubmit}
      handleChange={handleChange}
      
      flipFunction={flipFunction}
      /> */}

      {/* ) :  ( */}
      {/* <Signin
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      restflipFunction={restflipFunction}
      /> */}
      {/* )} */}
    </>
  )
}
