import React from 'react'
import "./views/styles/App.css"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import PrivateRoute from "./utils/PrivateRoute"
import { AuthProvider } from './context/AuthContext'

import Homepage from './views/Homepage'
import Registerpage from './views/Registerpage'
import Loginpage from './views/Loginpage'
import Dashboard from './views/Dashboard'
import Navbar from './views/Navbar'
import Todo from './views/Todo'
import AboutUs from './views/AboutUs'
import Laboratory from './views/Laboratory'
import Teamdoclab from './views/Teamdoclab'
import Specialistdoclab from './views/Specialistdoclab'
import Ourpartners from './views/Ourpartners'
import Reviews from './views/Reviews'
import Careers from './views/Careers'
import Licencecertificates from './views/Licencecertificates'
import Cost from './views/Cost'
import Instructersforpatients from './views/Instructersforpatients'
import Order from './views/Order'
import Popularquestions from './views/Popularquestions'
import Forclients from './views/Forclients'
import Costlaboratoriesservices from './views/Costlaboratoriesservices'

import Footer from './views/Footer'
import Error from './views/Error'

import Services from './views/Services'


function App() {
  return (
    <Router>
      <AuthProvider>
        < Navbar/>
        <Switch>
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
          <Route component={Loginpage} path="/login" />
          <Route component={Registerpage} path="/register" exact />
          <Route component={Homepage} path="/" exact />
          <Route component={Todo} path="/todo" exact />
          <Route component={AboutUs} path="/aboutus" exact />
          <Route component={Services} path="/services" exact />
          <Route component={Laboratory} path="/laboratory" exact />
          <Route component={Teamdoclab} path="/teamdoclab" exact />
          <Route component={Specialistdoclab} path="/specialistdoclab" exact />
          <Route component={Ourpartners} path="/ourpartners" exact />
          <Route component={Reviews} path="/reviews" exact />
          <Route component={Careers} path="/careers" exact />
          <Route component={Licencecertificates} path="/licencecertificates" exact />
          <Route component={Cost} path="/cost" exact />
          <Route component={Instructersforpatients} path="/instructersforpatients" exact />
          <Route component={Order} path="/order" exact />
          <Route component={Popularquestions} path="/popularquestions" exact />
          <Route component={Forclients} path="/forclients" exact />
          <Route component={Costlaboratoriesservices} path="/costlaboratoriesservices" exact />


          
          <Route component={Error} path="/*" exact />
        </Switch>
      
      </AuthProvider>
    </Router>
  )
}

export default App