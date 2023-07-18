import React, { useContext, useEffect, useState } from 'react'
import { PetsDataContext } from '../context/PetsContext';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
import { LoginContext } from '../context/context';
import axios from 'axios';


export default function PetFinderProfile() {
  const petsContext = useContext(PetsDataContext);
  const loginContext = useContext(LoginContext);
  const [allFavPets, setallFavPets] = useState([]);

  const getAllFavPets = async () => {
    const getFavPet = await axios.get(`http://localhost:3003/api/v2/favpet`,
      {
        headers: {
          authorization: `Bearer ${loginContext.user.token}`,
        },
      });
    console.log('getFavPet', getFavPet);

    setallFavPets(getFavPet.data)
  }
   useEffect(()=>{
    getAllFavPets();
   },[])

  return (
    <div>PetFinderProfile
      <div style={{marginLeft:'140px',marginRight:'140px',marginTop:'80px'}}>
            <MDBRow className='row-cols-1 row-cols-md-4 g-4'>

            {/* {console.log('getdbDogs', petsContext.allPets)} */}

            {allFavPets.map((item, idx) => {
            
if(loginContext.user.user.id == item.userId){


              
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






    </div>
  )
}
