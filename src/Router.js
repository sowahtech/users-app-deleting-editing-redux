import React from 'react';
import App from './App'
import EditForm from './components/EditForm';
import { BrowserRouter, Route } from 'react-router-dom';
import Register from './components/Register';


export default function Router() {
    return (
        <BrowserRouter>
            <Route exact path='/' component={App} />
            <Route path='/edit/:id' component={EditForm} />
            <Route path='/Register' component={Register} />
        </BrowserRouter>
   
    )
}
