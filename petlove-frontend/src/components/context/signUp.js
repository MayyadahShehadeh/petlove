import React, { useContext, useState } from 'react';
import { LoginContext } from '../context/context';
import { Button, Form } from 'react-bootstrap';
import { When } from 'react-if';

export default function Login() {
  const ContextLogin = useContext(LoginContext);

  let [userInputs, setIuserInputs] = useState({})
  // const [flip, setFlip] = useState(false);


  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setIuserInputs((prevalue) => {
      console.log('prevalue', prevalue);
      return {
        ...prevalue,   // Spread Operator              
        [name]: value
      }
    })
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   ContextLogin.login(userInputs.username, userInputs.password);
  // };
  const signUpubmit = (e) => {
    e.preventDefault();
    ContextLogin.signUp(
      userInputs.username,
      userInputs.password,
      userInputs.role,
      userInputs.email,
      userInputs.phone,
      );
  };

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


      <div style={{ marginRight: "300px", marginLeft: "300px" }}>
        <When condition={!ContextLogin.loggedIn}>
          <h1>SignUp Form</h1>
          <Form onSubmit={signUpubmit}>

            <Form.Group controlId="username">
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" placeholder="username" name="username" 
              onChange={handleChange} />
            </Form.Group>

            <br />

            <Form.Group controlId="formBasicEmail">
              <Form.Label>email:</Form.Label>
              <Form.Control type="text" placeholder="email" name="email" 
              onChange={handleChange} />
            </Form.Group>

            <br />

            <Form.Group controlId="phone">
              <Form.Label>phone:</Form.Label>
              <Form.Control type="text" placeholder="phone" name="phone" 
              onChange={handleChange} />
            </Form.Group>

            <br />

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label for="role">Role :</Form.Label>
              <Form.Control as="select" onClick={handleChange} name="role" id="role">
                {/* <option value="admin">Admin</option> */}
                <option value="petfinder">pet finder</option>
                <option value="petowner">pet owner</option>

              </Form.Control>
            </Form.Group>

            <br />
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password :</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" 
              onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>

            {/* <p>Already registered?{" "}
              <a href="/SignIn">
                Sign In
              </a>
            </p> */}
          </Form>
        </When>


      </div>


      {/* <h1>SignUp Form</h1>
      <form onSubmit={props.signUpubmit}>
      <input
      placeholder="UserName"
      name="username"
      type="text"
      onChange={props.handleChange}
        />
        
        <label for="role">Role:</label>
        <select onClick={props.handleChange} name="role" id="role">
        <option value="admin">Admin</option>
        <option value="user">User</option>
        </select>
        
        <input
        placeholder="password"
        name="password"
        type="password"
        onChange={props.handleChange}
        />
        <button type='submit'>Sign Up</button>
        
      </form> */}



     {/* {flip === false ? (       */}
{/*       
      <SignUp
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
