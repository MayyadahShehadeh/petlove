import axios from 'axios';
import React, { useEffect, useState ,useContext} from 'react'
import { LoginContext } from './context/context';
// import AdminProfile from '../../ProfilesPages/AdminProfile';
// import PetOwnerProfile from './ProfilesPages/PetOwnerProfile';
import Home from './Home';

export default function ProfilesRender() {
    const ContextLogin = useContext(LoginContext);

    // const [user,setUser] = useState(null);

    // useEffect(()=>{

    // },[])
  

    
        


    //  if (ContextLogin.user.user.role == null) {
    //       return "";
    //     }
    //     if(ContextLogin.user.user.role =='admin') {
    //         return <AdminProfile />;
    //     }
    //     if (ContextLogin.user.user.role == 'petowner') {
    //         return <PetOwnerProfile />;
    //     }
    //     return <Home />
        
  
      
         

  
}

