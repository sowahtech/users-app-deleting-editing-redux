import React from 'react';
import App from './App'
import EditForm from './components/EditForm';
import { BrowserRouter, Route } from 'react-router-dom';

export default function Router() {
    return (
        <BrowserRouter>
            <Route exact path='/' component={App} />
            <Route path='/edit/:id' component={EditForm} />
        </BrowserRouter>
   
    )
}
