import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Home from '../Layouts/Blog/Home'
import About from '../Layouts/Blog/About'
import Wrapper from '../Layouts/Wrapper'
export default function MainRouter() {
    return (
        <Wrapper>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/about" component={About} exact />
                </Switch>
            </BrowserRouter>
        </Wrapper>
    )
}