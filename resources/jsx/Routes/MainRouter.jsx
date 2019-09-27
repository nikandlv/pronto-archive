import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import Wrapper from '../Layouts/Wrapper'
import BlogRouter from './BlogRouter'
import AdminRouter from './AdminRouter'
import PanelRouter from './PanelRouter'

export default function MainRouter() {
    return (
        <Wrapper>
            <BrowserRouter>
                <Switch>
                    <Route path="/panel/*" component={AdminRouter}/>
                    <Route path="/admin/*" component={PanelRouter}/>
                    <Route path="/*" component={BlogRouter}/>
                </Switch>
            </BrowserRouter>
        </Wrapper>
    )
}