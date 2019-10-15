import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../Layouts/Blog/Home'
import About from '../Layouts/Blog/About'
import Wrapper from '../Layouts/Blog/Wrapper'
import Post from '../Layouts/Blog/Post'

export default function BlogRouter() {
    return (
        <Wrapper>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/post/:slug" component={Post} exact />
                <Route path="/about" component={About} exact />
            </Switch>
        </Wrapper>
    )
}