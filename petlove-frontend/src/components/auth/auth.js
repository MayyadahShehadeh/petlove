import { useContext } from "react";
import { LoginContext } from "../context/context";
import { When } from 'react-if';


export default function Auth(props) {

    const login2 = useContext(LoginContext)

    const isLoggedIn = login2.loggedIn;
    const can = login2.canDo(props.capability);

    // console.log('props.capability)', props.capability);
    // console.log('inside auth', isLoggedIn, can);

    return (
        <When condition={isLoggedIn && can}>
            {props.children}
        </When>
    )
}