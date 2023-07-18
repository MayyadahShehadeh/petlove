import React, { useContext, useEffect, useState } from 'react';
// import { DataContext } from '../context/DataContext';
import { Button, Form } from 'react-bootstrap';
import { LoginContext } from '../context/context';
import { Modal } from 'react-bootstrap'

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardFooter,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { PetsDataContext } from '../context/PetsContext';

export default function PetOwnerProfile() {

  // const dataContext = useContext(DataContext);
  const ContextLogin = useContext(LoginContext);
  const petsContext = useContext(PetsDataContext);


  let [userInputs, setIuserInputs] = useState({})
  // const [flip, setFlip] = useState(false);
  let [catsData, setCatsData] = useState([]);
  let [dogsData, setdogsData] = useState([]);
  let [petData, setpetData] = useState([]);

  let [show, setShow] = useState(false);



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
  const updatCatHandler = async (catId) => {
    await petsContext.updatePet(catId);
    // console.log('updateCat', dataContext.updateCat(catId));
    setShow(true);

  }
  const updateCatInfoOnSubmit = async (e) => {
    e.preventDefault();
    petsContext.updatePetInfo(userInputs.catName, userInputs.image_link, userInputs.origin);
    // console.log('updateCat',dataContext.updateCat(catId));

  }
  // const addCatSubmit = (e) => {
  //   e.preventDefault();
  //   dataContext.addCat(userInputs.catName, userInputs.image_link, userInputs.origin);
  // };
  const addPetSubmit = (e) => {
    e.preventDefault();
    petsContext.addPet(userInputs.name, userInputs.image_link, userInputs.origin,
      userInputs.petType);
  };
  useEffect(() => {
    // const timer = setTimeout(() => {
    //   console.log('This will run after 1 second!')
    // }, 1000);
    // return () => clearTimeout(timer);
    //   axios.get(`http://localhost:3003/api/v2/cats`).then((res) => {

    //     setCatsData(res.data)
    //   });

    //   axios.get(`http://localhost:3003/api/v2/dogs`).then((res) => {

    //   setdogsData(res.data)
    // });

    // axios.get(`http://localhost:3003/api/v2/pets`).then((res) => {
    //   setpetData(res.data)
    // })
    //   setCatsData(res.data)
    // });
  }, []);
  const handleClose = () => setShow(false);


  const [verticalActive, setVerticalActive] = useState('tab1');

  const handleVerticalClick = (value) => {
    if (String(value) === verticalActive) {
      return;
    }
    setVerticalActive(value);
  };


  // const choosenPetType = async (e) => {
  //   e.preventDefault();
  //   petsContext.choosenPetType(userInputs.petType2);

  // }
  return (
    <div style={{ marginLeft: '140px', marginRight: '140px', marginTop: '80px' }}>





    

      {/* ---------------------- tabs ------------------------------------ */}
      <MDBRow>
        <MDBCol size='3'>

          <MDBTabs className='flex-column text-center'>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
                Home
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
                Your Cats
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab3'}>
                Your Dogs
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
        </MDBCol>
        <MDBCol size='9'>
          <MDBTabsContent>
            <MDBTabsPane show={verticalActive === 'tab1'}>Home content</MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab2'}>ADD YOUR CAT


            {/* ------------------------- FILTER PETS --------------------- */}
  {/* <div className="row h-100 justify-content-center align-items-center" style={{ margin: '35px', marginTop: '100px' }}>
        <Form.Select aria-label="Default select example" name='petType2' 
          style={{ width: '50%' }} placeholder='choose pet'onChange={handleChange} */}
           {/* > */}
          {/* <option value="" >Select Cat Breed</option> */}
          {/* <option value="">All</option> */}
          {/* <option value="cat">cat</option>
          <option value="dog">dog</option>
        </Form.Select>
        <button onSubmit={(e) => choosenPetType(e)}>select </button>
      </div > */}

              <Form
                onSubmit={addPetSubmit}
              >
  
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>name:</Form.Label>
                  <Form.Control type="text" placeholder="name" name="name"
                    onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>image:</Form.Label>
                  <Form.Control type="text" placeholder="image_link" name="image_link"
                    onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>origin:</Form.Label>
                  <Form.Control type="text" placeholder="origin" name="origin"
                    onChange={handleChange} />
                </Form.Group>

                <br />

                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label for="petType">Role :</Form.Label>
                  <Form.Control as="select" onClick={handleChange} name="petType" id="petType">
                    {/* <option value="admin">Admin</option> */}
                    <option value="cat" >cat</option>
                    <option value="dog">dog</option>

                  </Form.Control>
                </Form.Group>
                <br />
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>


              {/* --------------------------- RENDER USER CATS ------------------- */}
              <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
                {console.log('userdb cats', catsData)}
                {/* {console.log('user id ', ContextLogin.user.user.id)} */}
                {petsContext.allPets.map((item, idx) => {
                  // { console.log('catsssss userId:', item.userId) }
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
                          <Button onClick={() => { petsContext.deletePet(item.id) }}>

                            delete
                          </Button>

                          <button onClick={() => { updatCatHandler(item.id) }} > update </button>
                          <MDBCardBody>
                            <MDBCardTitle>{item.name}</MDBCardTitle>
                            {/* <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                          </MDBCardText> */}
                          </MDBCardBody>

                        </MDBCard>
                      </MDBCol>
                    )
                  }
                })}
              </MDBRow>
              {/* ------------------------------------ */}

            </MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab3'}>dogs content

              {/* <Form onSubmit={addCatSubmit}>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>name:</Form.Label>
                  <Form.Control type="text" placeholder="catName" name="catName"
                    onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>image:</Form.Label>
                  <Form.Control type="text" placeholder="image_link" name="image_link"
                    onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>origin:</Form.Label>
                  <Form.Control type="text" placeholder="origin" name="origin"
                    onChange={handleChange} />
                </Form.Group>

                <br />
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form> */}


              {/* --------------------------- RENDER USER CATS ------------------- */}
              <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
                {console.log('userdb cats', catsData)}
                {/* {console.log('user id ', ContextLogin.user.user.id)} */}
                {dogsData.map((item, idx) => {
                  // { console.log('catsssss userId:', item.userId) }
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
                          {/* <Button onClick={() => { dataContext.deleteCat(item.id) }}>

                            delete
                          </Button> */}

                          {/* <button onClick={() => { updatCatHandler(item.id) }} > update </button> */}
                          <MDBCardBody>
                            <MDBCardTitle>{item.name}</MDBCardTitle>
                            {/* <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                          </MDBCardText> */}
                          </MDBCardBody>

                        </MDBCard>
                      </MDBCol>
                    )}
                })}
              </MDBRow>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>



      {/* ------------------------ MODAL FORM TO UPDATE CAT INFORMATIONS ------------- */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
          onSubmit={updateCatInfoOnSubmit}
          >
            name :<input type="text" name='catName' onChange={handleChange}
              defaultValue={petsContext.selectedPet.name} />
            <br />
            {/* cat length :<input type="text" name='catLength'
                  defaultValue={this.state.selectedCat.catLength} />
                 <br/> */}

            Image: <input type="text" name='image_link' onChange={handleChange}
              defaultValue={petsContext.selectedPet.image_link} style={{ width: '390px' }} />
            <br />

            origin :<input type="text" name='origin' onChange={handleChange}
              defaultValue={petsContext.selectedPet.origin} />
            <br />

            <br />
            <input type="submit" value="update" onClick={handleClose} />
            <button onClick={handleClose}>Close</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
      {/* -------------------------------------------------- */}

    </div>
  )
}
