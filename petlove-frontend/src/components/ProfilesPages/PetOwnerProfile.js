import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataContext';
import { Button, Form } from 'react-bootstrap';
import { LoginContext } from '../context/context';

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardFooter
} from 'mdb-react-ui-kit';
import axios from 'axios';

export default function PetOwnerProfile() {

  const dataContext = useContext(DataContext);
  const ContextLogin = useContext(LoginContext);

  let [userInputs, setIuserInputs] = useState({})
  // const [flip, setFlip] = useState(false);
  let [catsData, setCatsData] = useState([]);
  // let [empty, setEmpty] = useState([])



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
    dataContext.addCat(userInputs.catName, userInputs.image_link,userInputs.origin);
  };

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   console.log('This will run after 1 second!')
    // }, 1000);
    // return () => clearTimeout(timer);
    axios.get(`http://localhost:3003/api/v2/cats`).then((res) => {

      setCatsData(res.data)
    });

  }, [catsData]);

  return (
    <div style={{ marginLeft: '140px', marginRight: '140px', marginTop: '80px' }}>


      <Form onSubmit={signUpubmit}>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" placeholder="catName" name="catName" 
          onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>image:</Form.Label>
          <Form.Control type="text" placeholder="image_link" name="image_link"
           onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>image:</Form.Label>
          <Form.Control type="text" placeholder="origin" name="origin"
           onChange={handleChange} />
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


      <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
        {console.log('userdb cats', catsData)}
        {console.log('user id ', ContextLogin.user.user.id)}
        {catsData.map((item, idx) => {
          { console.log('catsssss userId:', item.userId) }
          if (item.userId == ContextLogin.user.user.id) {


            return (


              <MDBCol >
                <MDBCard className='h-100' style={{ margin: '10px' }} key={idx}>
                  <MDBCardImage
                    src={item.image_link}
                    alt='...'
                    position='top'
                  />
                  {/* <Button onClick={()=>{deleteCat()}}> */}
                  <Button onClick={() => { dataContext.deleteCat(item.id) }}>

                    delete
                  </Button>
                  <MDBCardBody>
                    <MDBCardTitle>{item.name}</MDBCardTitle>
                    {/* <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                          </MDBCardText> */}
                  </MDBCardBody>

                </MDBCard>
              </MDBCol>


            );

            // <p>
            //     {item.name}
            // </p>
          }
        })
        }
      </MDBRow>
    </div>
  )
}
