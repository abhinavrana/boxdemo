import React from 'react';
import {Router, Route} from 'react-router-dom';
import {history} from './history';
import Dashboard from './Dashboard';
import Otherfiles from './otherfiles';
import Nav from './nav';

const Main = () => {
    const token = 'aRaOhH4q6fcQqDXGmuLinQe4BbENI22S';
    const othertoken = 'aiMADZorjZDCJEfi7zREbvHBo2K70MXf';
    const language = 'en-US';
return(
    <Router history={history}>
        <div>
        <Nav/>
            <Route exact path="/dashboard" render={()=>{return <Dashboard token={token} language={language} /> }} />
            <Route exact path="/other-dashboard" render={()=>{return <Otherfiles token={othertoken} language={language} /> }} />
        </div>
    </Router>
)
}

export default Main;
