import React, { useState, useContext } from 'react';
import {
    MDBContainer, MDBNavbar, MDBNavbarBrand,
    MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBCollapse,
    MDBIcon, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem
} from 'mdb-react-ui-kit';
import imagelogo from '../images/logo2.png';
import { When } from 'react-if';
import { LoginContext } from './context/context';
import Auth from './auth/auth';
export default function App() {
    const ContextLogin = useContext(LoginContext);
    const [showNav, setShowNav] = useState(false);

    return (
        <div >

            <MDBNavbar expand='lg' light bgColor='light' fixed  >
                <MDBContainer fluid>
                    <MDBNavbarBrand href='/'>
                        <img
                            src={imagelogo}
                        // height='80'
                        // alt=''
                        // loading='lazy'
                        />
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNav(!showNav)}>

                    </MDBNavbarToggler>


                    <div className='ms-auto'>


                        <MDBCollapse navbar show={showNav} style={{ justifyContent: 'center' }}  >
                            <MDBNavbarNav>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/'>
                                        Home
                                    </MDBNavbarLink>
                                </MDBNavbarItem>

                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/cats'>
                                        Cats
                                    </MDBNavbarLink>
                                </MDBNavbarItem> <MDBNavbarItem>
                                    <MDBNavbarLink href='/dogs'>
                                        Dogs
                                    </MDBNavbarLink>
                                </MDBNavbarItem>

                                {ContextLogin.loggedIn ?

                                    <MDBDropdown group className='shadow-0'>
                                        <MDBDropdownToggle color='link'>
                                            <MDBIcon fas icon="user" />


                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu>

                                       
                                       
                                            <MDBDropdownItem link>
                                                <MDBNavbarItem >
                                                  
                                                       {ContextLogin.user.user.username}
                                                   <br/>
                                                   {ContextLogin.loggedIn}
                                                </MDBNavbarItem>
                                            </MDBDropdownItem>

                                            <MDBDropdownItem link>
                                                <MDBNavbarItem >
                                                  
                                                    <MDBNavbarLink  href='/profile'>
                                                        Profile
                                                    </MDBNavbarLink>
                                                </MDBNavbarItem>
                                            </MDBDropdownItem>

                                            {/* <Auth capability="deleteUser">
                                            <MDBDropdownItem link>
                                                <MDBNavbarItem>
                                                    <MDBNavbarLink href='/AdminProfile'>
                                                        Profile
                                                    </MDBNavbarLink>
                                                </MDBNavbarItem>
                                            </MDBDropdownItem>
                                            </Auth> */}
                                            <MDBDropdownItem link onClick={ContextLogin.logout}>
                                                Log Out
                                            </MDBDropdownItem>

                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                    :

                                    // {ContextLogin.loggedIn?
                                    // }
                                    <MDBNavbarItem>
                                        <MDBNavbarLink href='/SignIn' >Sign in</MDBNavbarLink>


                                    </MDBNavbarItem>
                                }

                                {/* <MDBNavbarItem>
                                    <MDBNavbarLink href='/Profile'>Profile</MDBNavbarLink>
                                </MDBNavbarItem>

                                 <MDBNavbarItem>
                                    <MDBNavbarLink href='/Profile'>Profile</MDBNavbarLink>
                                </MDBNavbarItem> */}
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </div>





                    {/* <img alt="imag" className="header-user-pic" src={imagelogo} /> */}

                </MDBContainer>
            </MDBNavbar>
        </div>
    );
}