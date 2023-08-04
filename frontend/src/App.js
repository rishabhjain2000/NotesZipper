
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './components/Header/Header'; 
import Footer from './components/Footer/Footer';
import LandingPage from './screens/Landing Page/LandingPage';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import MyNotes from './screens/MyNotes/MyNotes';
import CreateNote from './screens/CreateNote/CreateNote'
import SingleNote from './screens/SingleNote/SingleNote'
import { useState } from 'react';
function App() {
   const [search,setSearch]=useState("");
 
  return (
    <BrowserRouter>
    <Header setSearch={setSearch}/>
      <main>
      <Routes>
         <Route path='/' element={<LandingPage/>}/>
         <Route path='/login' element={<LoginScreen/>}/>
         <Route path='/register' element={<RegisterScreen/>}/>
         <Route path='/createnote' element={<CreateNote/>}/>
         <Route path='/note/:id' element={<SingleNote/>}/>
         <Route path='/mynotes' element={<MyNotes search={search}/>}/>
      </Routes>
      </main>
     <Footer/>
    </BrowserRouter>
  );
}

export default App;
