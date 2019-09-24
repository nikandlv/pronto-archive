import router from 'react-router-dom'
import {Switch} from 'react-router-dom'
export default function MainRouter() {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
        </Switch>
    )
}