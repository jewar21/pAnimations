import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect

} from "react-router-dom";
import { Prueba } from '../components/Prueba';

import { ScreenPrimary } from '../components/ScreenPrimary';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/prueba" component={Prueba} />
                    <Route path="/" component={ScreenPrimary} />
                    <Redirect to= '/'/>
                </Switch>
            </div>
        </Router>
    )
}
