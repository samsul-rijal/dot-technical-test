import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Register, Auth, Movies } from '../../pages'

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Auth} />
                    <Route path="/movies" component={Movies} />

                    <Route path="/" component={Home} />

                </Switch>
            </Router>
        </div>
    )
}

export default Routes
