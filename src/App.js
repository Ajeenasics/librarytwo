import logo from './logo.svg';
import './App.css';
import Slogin from './Student/Slogin'
import Sregister from './Student/Sregister';
import Fbookrequest from './Faculty/Fbookrequest';
import Ffeedback from './Faculty/Ffeedback';
import Ffine from './Faculty/Ffine';
import Staffaddbook from './Staff/Staffaddbook';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Footer from './Footer/Footer';
import Studentnav from './Nav/Studentnav';
import Home from './Home/Home';
import Studentview from './Student/Studentview';
import Studenthome from './Student/Studenthome';
import Studentfine from './Student/Studentfine';
import Studentfeedback from './Student/Studentfeedback';
import Studentprofile from './Student/Studentprofile';
import Studenteditprofile from './Student/Studenteditprofile';
import Login from './Staff/Login';
import Register from './Staff/Register';
import Add from './Staff/Add';


import Profile from './Faculty/Profile';
import Search from './Faculty/Search';
import Homes from './Staff/Homes';
import NavBar from './Staff/Navbar';
import footer from './Staff/footer';
import FLogin from './Faculty/FLogin';
import FRegister from './Faculty/FRegister';
import Studentviewbook from './Student/Studentviewbook';
import Sbookdetails from './Student/Sbookdetails';
import Swishlist from './Student/Swishlist';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path="/Sregister" element={<Sregister/>}/>
        <Route path="/Slogin" element={<Slogin/>}/>
        <Route path="/Fbookreq" element={<Fbookrequest/>}/>
        <Route path="/Ffeedback" element={<Ffeedback/>}/>
        <Route path="/Ffine" element={<Ffine/>}/>
        <Route path="/Staffaddbook" element={<Staffaddbook/>}/>
        <Route path="/Footer" element={<Footer/>}/>
        <Route path="/Navbar" element={<Studentnav/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/Sview" element={<Studentview/>}/>
        <Route path="/Shome" element={<Studenthome/>}/>
        <Route path="/Sfine" element={<Studentfine/>}/>
        <Route path="/Sfeedback" element={<Studentfeedback/>}/>
        <Route path="/Sprofile" element={<Studentprofile/>}/>
        <Route path="/Sedit" element={<Studenteditprofile/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/Viewbook' element={<Studentviewbook/>} />
        <Route path='/Bookdetails/:id' element={<Sbookdetails/>}/>
        <Route path='/Swishlist' element={<Swishlist/>}/>



          <Route path='/add' element={<Add/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/search' element={<Search/>} />
          <Route path='/home' element={<Homes/>} />
          <Route path='/navbar' element={<NavBar/>} />
          <Route path='/footer' element={<footer/>} />
          <Route path='/flogin' element={<FLogin/>} />
          <Route path='/fregister' element={<FRegister/>} /> 
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
