import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from "./pages/Home"
import Sport from "./pages/Sport"
import Page404 from "./pages/Page404"

import './styles/sport.css'

function App(){
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component = {Home} />
          <Route exact path="/events/:sportID(\d+)" component = {Sport} name="sport"/>
          <Route component = {Page404} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
