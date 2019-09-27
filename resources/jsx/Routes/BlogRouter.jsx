import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../Layouts/Blog/Home'
import About from '../Layouts/Blog/About'
import Wrapper from '../Layouts/Blog/Wrapper'

export default function BlogRouter() {
    return (
        <Wrapper>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} exact />
            </Switch>
        </Wrapper>
    )
}