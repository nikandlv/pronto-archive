import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../Layouts/Blog/Home'
import About from '../Layouts/Blog/About'

export default function PanelRouter() {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
        </Switch>
    )
}