import React, { useState, useEffect, useContext } from 'react';
// import cookie from 'react-cookies';
import axios from 'axios';
import { LoginContext } from './context';


export const DataContext = React.createContext();

export default function DataProvider(props) {
    const ContextLogin = useContext(LoginContext);


    const [getDogs, setGetDogs] = useState([]);
    const [getCats, setGetCats] = useState([]);
    const [dbCats, setDbCats] = useState([]);
    const [userdbCats, setuserdbCats] = useState([]);

    // const [allCats, setAllCats] = useState([]);

    useEffect(() => {
        //  axios.get(`http://localhost:3003/getdogs`).then((res) => {
        //    console.log('dogs', res.data);
        //    setGetDogs(res.data);

        // });
        //  axios.get(`http://localhost:3003/getCats`).then((res) => {
        //    console.log('cats', res.data);
        //    setGetCats(res.data);

        // });
        axios.get(`http://localhost:3003/api/v2/cats`).then((res) => {
            console.log('cats database', res.data);
            setDbCats(res.data);
            setuserdbCats(res.data)
            console.log('userdb cats', userdbCats);

            // setAllCats([...dbCats, ...getCats]);
            console.log('setDbCats:', dbCats);

        });


        // axios.get(`http://localhost:3003/api/v2/cats`).then((res) => {
        //     console.log('cats database', res.data);
        //     res.data.filter(item => {

        //         if(ContextLogin.loggedIn ){
        //             setuserdbCats(item )

        //         }

        //     })
        // });
        // // console.log('user id', ContextLogin.user.user.id);
        // console.log('userdb cats', userdbCats);
    }, []);

    const addCat = async (catName, image_link, origin) => {
        const user = ContextLogin.user;
        console.log('userrrr', user);

        let catInfo = {
            userId: user.user.id,
            catOwnerName: user.user.username,
            catOwnerEmail: user.user.email,
            userPhone: user.user.phone,
            name: catName,
            image_link: image_link,
            origin: origin
        }
        console.log(catInfo);
        const addCatData = await axios.post(`http://localhost:3003/api/v2/cats`, catInfo, {
            headers: {
                authorization: `Bearer ${user.token}`,
            },
        });
        console.log('addCatData', addCatData);

        setDbCats((prev) => {
            return [...prev, addCatData.data]
        });

        // console.log('all cats:', allCats);
        console.log('bdcats', dbCats);

    }


    const deleteCat = async (catID) => {
        const { user } = ContextLogin.user;
        let deletCat = await axios.delete(`http://localhost:3003/api/v2/cats/${catID}`, {
            headers: {
                authorization: `Bearer ${user.token}`,
            },
        })
        console.log('bdcats', deletCat);

        // setDbCats((prev) => {
        //     return [...prev, deletCat.data]
        // });

    }
    const States = {
        // getDogs: getDogs,
        // getCats: getCats,
        dbCats: dbCats,
        // allCats: allCats,
        addCat: addCat,
        userdbCats: userdbCats,
        deleteCat: deleteCat
    }


    return (
        <>
            <DataContext.Provider value={States}>
                {props.children}
            </DataContext.Provider >
        </>

    )

}

