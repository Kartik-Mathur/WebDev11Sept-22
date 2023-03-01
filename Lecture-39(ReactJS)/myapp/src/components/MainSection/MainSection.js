// import React from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// // import { Home, About, Users } from "./page/";
// import Home from '../Home/Home';


// export default function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <nav>
//           <ul>

//             <li>
//               <Link to="/home">Home</Link>
//             </li>

//           </ul>
//         </nav>

//         <Routes>
//           <Route
//             path="/home"
//             element={
//                 <Home />
//             }
//           />
//           {/* <Route path="/cart" element={<Users />} /> */}
//           {/* <Route path="/food" element={<Home />} /> */}
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

import React, { Fragment, useState } from 'react';
import Cart from '../Cart/Cart';
import FoodDetails from '../FoodDetails/FoodDetails';
import Home from '../Home/Home';
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import styles from './MainSection.module.css';
const data = {
    name: " Text context react router v6",
    onClick: () => {
        console.log("this event onclick from context");
    }
};

export const ContextData = React.createContext();

const MainSection = () => {
    return (
        
    )
}

export default MainSection
