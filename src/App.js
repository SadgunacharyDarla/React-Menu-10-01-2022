import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import '../src/assets/nav';
import './assets/menu.css';
import './assets/style.css';


import { BrowserRouter, Route, Switch } from "react-router-dom";



function App() {
  return (
    <div className="App">
        <BrowserRouter>
    <Navbar />     
    <div>
    <Switch>
      {/* <Route Path="/" exact="true" component={Home} />
      <Route Path="/Home"  component={Home} />
      <Route Path="/Aboutus"  component={Aboutus} />
      <Route Path="/Calci"  component={Calci} />
      <Route Path="/Covid" component={Covid} />
      <Route Path="/Coviddatafetch"  component={Coviddatafetch} />
      <Route Path="*"  component={Notfound} /> */}



    </Switch>
    </div>

    </BrowserRouter>
    </div>
  );
}

export default App;
