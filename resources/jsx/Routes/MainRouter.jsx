import router from 'react-router-dom'
import {Switch} from 'react-router-dom'
import Home from '../Layouts/Blog/Home'
export default function MainRouter() {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
        </Switch>
    )
}