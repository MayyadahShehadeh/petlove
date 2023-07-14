// import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from './components/Header';
import Footer from './components/Footer';
import { useContext } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
// import Profile from '../ProfilesPages/';
// import Signin from './components/context/signin';
import RenderAll from './renderAll';
// import { When } from 'react-if';
import { LoginContext } from "./components/context/context";
import LoginRender from './loginRender';
import CatsRender from './components/petsPages/CatsRender';
import DogsRenders from './components/petsPages/DogsRenders';
import PetOwnerProfile from './components/ProfilesPages/PetOwnerProfile';
// import AdminProfile from '../ProfilesPages/AdminProfile';
// import ProfilesRender from './components/ProfilesRender';
import DataProvider from './components/context/DataContext';


function App() {
  const login2 = useContext(LoginContext);

  return (

    <div className="App">
 <DataProvider>

        <Header />
        <Router>
          <RenderAll />

          <Routes>
            <Route exact path="/"
              element={<Home />}>
            </Route>

            {/* <Route
              exact path="/Profile"
              element={<ProfilesRender/> }>
            </Route> */}

            <Route
              exact path="/PetOwnerProfile"
              element={login2.loggedIn ? <PetOwnerProfile /> : <LoginRender />}>
            </Route>
{/* 
            <Route
            exact path="/AdminProfile"
              element={ <AdminProfile /> }>
            </Route> */}

            <Route
              exact path="/SignIn"
              element={!login2.loggedIn ? <LoginRender /> : <Home />} >
            </Route>

            <Route
              exact path="/cats"
              element={<CatsRender />}>
            </Route>
{/* 
            <Route
              exact path="/dogs"
              element={<DogsRenders />}>
            </Route> */}

            {/* <Route
              exact path="/AdoptionProcess"
              element={<AdoptionProce/>}>
            </Route> */}

            {/* <Route
              exact path="/CareAfterAdoption"
              element={<CareAfterAdoption/>}>
            </Route> */}

            {/* <Route
              exact path="/AboutUs"
              element={<Aboutus/>}>
            </Route> */}

          </Routes>
        </Router >
        <Footer />
    
            </DataProvider>
    </div>
  );
}

export default App;
