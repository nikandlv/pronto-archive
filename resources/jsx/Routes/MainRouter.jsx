import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Home from '../Layouts/Blog/Home'
export default function MainRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
            </Switch>
        </BrowserRouter>
    )
}