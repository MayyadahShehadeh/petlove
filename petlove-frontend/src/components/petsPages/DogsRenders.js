import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/DataContext';
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
export default function DogsRenders() {

    const dataContext = useContext(DataContext);


    return (
        <div style={{marginLeft:'140px',marginRight:'140px',marginTop:'80px'}}>
            <MDBRow className='row-cols-1 row-cols-md-4 g-4'>

            {console.log('dogs data:', dataContext.getDogs)}
            {dataContext.getDogs.map((item, idx) => {
                return (
                    <MDBCol>
                    <MDBCard className='h-100' style={{margin:'10px'}} key={idx}>
                      <MDBCardImage
                        src={item.img}
                        alt='...'
                        position='top'
                      />
                      <MDBCardBody>
                        <MDBCardTitle>{item.breed}</MDBCardTitle>
                        {/* <MDBCardText>
                          This is a longer card with supporting text below as a natural lead-in to additional content.
                          This content is a little bit longer.
                        </MDBCardText> */}
                      </MDBCardBody>
                  
                    </MDBCard>
                  </MDBCol>
                    // <p>
                    //     {item.breed}
                    // </p>
                )
            })
            }
              </MDBRow>
        </div>
    )
}
