import React, { useState, useEffect, useContext } from 'react';
// import cookie from 'react-cookies';
import axios, { all } from 'axios';
import { LoginContext } from './context';


export const PetsDataContext= React.createContext();

export default function PetsDataProvider(props) {
    const ContextLogin = useContext(LoginContext);


    const [allPets, setallPets] = useState([]);
    const [getdbDogs, setGetdbDogs] = useState([]);
    const [getdbCats, setgetdbCats] = useState([]);
    const [selectedPet, setselectedPet] = useState([]);
    const [favoritePet, setfavoritePett] = useState([]);
    const [allfavoritePet, setallfavoritePet] = useState([]);


    // const [getCats, setGetCats] = useState([]);

    // const [dbCats, setDbCats] = useState([]);
    // const [userdbCats, setuserdbCats] = useState([]);
    // const [deletedCat, setdeletedCat] = useState([]);
    // const [addedCat, setaddedCat] = useState([]);


const getAllPets =async () =>{
    await axios.get(`http://localhost:3003/api/v2/pets`).then((res) => {
            // console.log('dogs database', res.data);

            setallPets(res.data)
    
            // setuserdbCats(res.data)
            
            // console.log('setDbCats:', dbCats);
            
        });
}

    useEffect(() => {
      
        // axios.get(`http://localhost:3003/api/v2/dogs`).then((res) => {
        //     console.log('dogs database', res.data);
        //     setGetdbDogs(res.data);
        getAllPets();

        // axios.get(`http://localhost:3003/api/v2/pets`).then((res) => {
        //     // console.log('dogs database', res.data);

        //     setallPets(res.data)
    
        //     // setuserdbCats(res.data)
            
        //     // console.log('setDbCats:', dbCats);
            
        // });
        
    }, []);
    console.log('allPets', allPets);

    const addPet = async (name, image_link, origin,petType) => {
        const user = ContextLogin.user;
        console.log('userrrr', user.user);

        let petInfo = {
            userId: user.user.id,
            petOwnerName: user.user.username,
            petOwnerEmail: user.user.email,
            userPhone: user.user.phone,
            name: name,
            image_link: image_link,
            origin: origin,
            petType:petType
        }
        console.log(petInfo);
        const addPetData = await axios.post(`http://localhost:3003/api/v2/pets`, petInfo,
         {
            headers: {
                authorization: `Bearer ${user.token}`,
            },
        });
        console.log('addCatData', addPetData);
        setallPets([addPetData.data,...allPets])
        // setaddedCat(addCatData)
        // console.log('addedCat',addedCat);
        // setDbCats((prev) => {
        //     return [addCatData.data,...prev]
        // });

        // console.log('all cats:', allCats);
        // console.log('bdcats', dbCats);
        getAllPets();

    }


    const deletePet = async (petID) => {
        const { user } = ContextLogin.user;
        let deletPet = await axios.delete(`http://localhost:3003/api/v2/pets/${petID}`, {
            headers: {
                authorization: `Bearer ${user.token}`,
            },
        })
       
        console.log('deletPet', deletPet);
        getAllPets();

    }

    const updatePet = async (petID) => {
        let choosenCat = allPets.find(item => {
            return item.id === petID;
        })
        setselectedPet(choosenCat);
        console.log('choosen cat', choosenCat);
    }
    console.log('selectedPet', selectedPet);

    const updatePetInfo = async (catName, image_link, origin) => {
        const { user } = ContextLogin.user;

        let petInputs = {
            // userId: user.user.id,
            // catOwnerName: user.user.username,
            // catOwnerEmail: user.user.email,
            // userPhone: user.user.phone,
            name: catName,
            image_link: image_link,
            origin: origin
        }
        let petID = selectedPet.id;
        let catData = await axios.put(`http://localhost:3003/api/v2/pets/${petID}`,petInputs,
            {
                headers: {
                    authorization: `Bearer ${user.token}`,
                },
            }
        );
        console.log('catData',catData.data);
        // setallPets([...allPets,catData])
        getAllPets();

    }
    console.log('allPets', allPets);

    const choosenPetType = async (petType) => {
        const selectedPet = petType;
       
        let choosenCat = await axios
        .get(`http://localhost:3003/api/v22/choosenpet?choosenPet=${selectedPet}`);
    
        let choosenCatArray = [choosenCat.data];
        setallPets(choosenCatArray);
        // this.setState({
        //   allCats: choosenCatArray
        // })
        console.log('choosen cat filter', choosenCatArray );
      }


     
      
      const addFavPet = async (petID) => {
          const user = ContextLogin.user;
          let choosenPet = allPets.find(item => {
              return item.id === petID;
            })
            setfavoritePett(choosenPet);
            console.log('favorite ', favoritePet);
        
        console.log('userrrr', user.user);
        let petInfo = {
            name: favoritePet.name,
            image_link: favoritePet.image_link,
            petOwnerName: favoritePet.petOwnerName,
            petOwnerEmail: favoritePet.petOwnerEmail,
            userPhone: favoritePet.userPhone,
            origin: favoritePet.origin,
            petType:favoritePet.petType,
            petOwnerId:favoritePet.userId,
            userId: user.user.id,
        }
        console.log(petInfo);
        const addPetData = await axios.post(`http://localhost:3003/api/v2/favpet`, petInfo,
         {
            headers: {
                authorization: `Bearer ${user.token}`,
            },
        });
        setallfavoritePet([addPetData.data,...allfavoritePet])
    }
    console.log('allfavoritePet', allfavoritePet);

    const States = {
        getdbDogs:getdbDogs,
        getdbCats:getdbCats,
        allPets:allPets,
        addPet:addPet,
        choosenPetType:choosenPetType,
        deletePet:deletePet,
        updatePet:updatePet,
        updatePetInfo: updatePetInfo,
        selectedPet: selectedPet,
        favoritePet:favoritePet,
        addFavPet:addFavPet
        // deletedCat:addedCat
    }


    return (
        <>
            <PetsDataContext.Provider value={States}>
                {props.children}
            </PetsDataContext.Provider >
        </>

    )

}

