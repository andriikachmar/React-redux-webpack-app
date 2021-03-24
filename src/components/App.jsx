import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import './App.less'
import Card from './card/Card'
import Main from './main/repo/Main'

const App = () => {
    return (
        <BrowserRouter>
            <div>
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/card/:username/:reponame' component={Card} />
                <Redirect to='/'></Redirect>
            </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App