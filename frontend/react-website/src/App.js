import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from "./components/Home"
import Sport from "./components/Sport"
import Page404 from "./components/Page404"

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
