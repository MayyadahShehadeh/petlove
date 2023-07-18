// import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Header from './components/Header';
import Footer from './components/Footer';
import { useContext } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';

import RenderAll from './renderAll';
import { LoginContext } from "./components/context/context";
import LoginRender from './loginRender';
import CatsRender from './components/petsPages/CatsRender';
import DogsRenders from './components/petsPages/DogsRenders';
import PetsDataProvider from './components/context/PetsContext';
import ProfilesRender from './components/ProfilesRender';
function App() {
  const login2 = useContext(LoginContext);

  return (

    <div className="App">
 {/* <DataProvider> */}
 <PetsDataProvider>



        <Header />
        <Router>
          <RenderAll />

          <Routes>
            <Route exact path="/"
              element={<Home />}>
            </Route>

            {/* <Route
              exact path="/adminprofile"
              element={<AdminProfile/> }>
            </Route>
            <Route
              exact path="/petownerprofile"
              element={<ProfilesRender/> }>
            </Route> <Route
              exact path="/petfinderprofile"
              element={<PetFinderProfile/> }>
            </Route> */}

            <Route
              exact path="/profile"
              element={login2.loggedIn ? <ProfilesRender /> : <Home />}>
            </Route>

            <Route
              exact path="/SignIn"
              element={!login2.loggedIn ? <LoginRender /> : <Home />} >
            </Route>

            <Route
              exact path="/cats"
              element={<CatsRender />}>
                </Route>

            <Route
              exact path="/dogs"
              element={<DogsRenders />}>
            </Route>

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
    
            </PetsDataProvider>
            {/* </DataProvider> */}
    </div>
  );
}

export default App;
