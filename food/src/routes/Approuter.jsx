import React from 'react';
import {BrowserRouter  ,Routes,Route}  from 'react-router-dom'
import Home from '../Pages/Home';
import Notfound from '../components/Notfound';
import About from '../Pages/About';
import Navsection from '../components/Navsection';
import Contact from '../Pages/Contact';
import Fooditems from '../components/Fooditems';
import Temlate from '../components/Temlate'
import Shop from '../Pages/Shop';
import ChefsCard from '../components/ChefsCard';
import Chef from '../Pages/Chef';


function Approuter(props) {
    return (
        <div>
            <BrowserRouter>
            <Navsection/>
            <Routes>
                
                <Route path='/' element={<Temlate><Home/></Temlate>}/>
                <Route path='/about' element={<Temlate><About/> </Temlate>}/>
                 <Route path='/shop' element={<Temlate><Shop/> </Temlate>}/>
                  <Route path='/chefs' element={<Temlate><Chef/> </Temlate>}/>
                <Route path='/contact' element={<Temlate><Contact/> </Temlate>}/>
                <Route path='*' element={<Notfound/>}/>
                
            </Routes>
           
            </BrowserRouter>
            
        </div>
    );
}

export default Approuter;