import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../Layouts/Blog/Home'
import About from '../Layouts/Blog/About'
import Wrapper from '../Layouts/Blog/Wrapper'
import Post from '../Layouts/Blog/Post'
import posed, { PoseGroup } from 'react-pose';


const RouteContainer = posed.div({
    enter: { x: 0, opacity: 1,    beforeChildren: true,   },
    exit: { x: -100, opacity: 0 }
});

export default function BlogRouter(props) {
    return (
        <Wrapper>
            <RouteContainer key={this.props.location.pathname}>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/post/:slug" component={Post} exact />
                    <Route path="/about" component={About} exact />
                </Switch>
            </RouteContainer>
        </Wrapper>
    )
}