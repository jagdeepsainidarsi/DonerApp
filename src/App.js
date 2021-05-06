import './App.css';
import React from "react";
import Registration from "./component/Registration";
import Search from "./component/Search"

import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  
return (
    <>
    <BrowserRouter>
    <Switch>
    <Route exact path="/">
    <Registration/>
   </Route>

   <Route exact path="/search">
   <Search/>
   </Route>
       
   
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
