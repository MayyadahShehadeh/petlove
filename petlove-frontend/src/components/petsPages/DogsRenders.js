import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/DataContext';
import { Modal } from 'react-bootstrap'

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
import { PetsDataContext } from '../context/PetsContext';
export default function DogsRenders() {

    const petsContext = useContext(PetsDataContext);
    const dogsDatabase = petsContext.allPets;
    const [dogOwnerName, setdogOwnerName] = useState('');
    const [dogOwnerEmail, setdogOwnerEmail] = useState('');
    const [dogOwnerPhone, setdogOwnerPhone] = useState('');
    const [show, setShow] = useState(false);

    const ownerContactInformation = async (catID) => {
      let choosenDog = dogsDatabase.find(item => {
        return item.id === catID
      })
      // console.log('choosenCat', choosenCat);
      setdogOwnerName(choosenDog.petOwnerName);
      setdogOwnerEmail(choosenDog.petOwnerEmail);
      setdogOwnerPhone(choosenDog.userPhone);
      setShow(true);
  
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <div style={{marginLeft:'140px',marginRight:'140px',marginTop:'80px'}}>

          {/* ----------------------------- SHOW CONTACT OWNER INFORMATION IN MODAL ---------------- */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Cat Owner Contact Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Name :{dogOwnerName} <br />
          Email :{dogOwnerEmail} <br />
          Phone :{dogOwnerPhone} <br />


        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>

            <MDBRow className='row-cols-1 row-cols-md-4 g-4'>

            {console.log('getdbDogs', petsContext.allPets)}

            {dogsDatabase.map((item, idx) => {
              if(item.petType == "dog"){

              
                return (
                    <MDBCol>
                    <MDBCard className='h-100' style={{margin:'10px'}} key={idx}>
                      <MDBCardImage
                        src={item.image_link}
                        alt='...'
                        position='top'
                      />
                      <MDBCardBody>
                        <MDBCardTitle>{item.name}</MDBCardTitle>
                         {/* <Auth capability="read"> */}
                  <button onClick={() => { ownerContactInformation(item.id) }}>contact the owner </button>
                  {/* </Auth> */}
                  <button onClick={() => { petsContext.addFavPet(item.id) }}>add to favo </button>

                      </MDBCardBody>
                  
                    </MDBCard>
                  </MDBCol>
                    // <p>
                    //     {item.breed}
                    // </p>
                )
                      }
            })
            }
              </MDBRow>
        </div>
    )
}
