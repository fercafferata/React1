import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../components/Home';
import Navbar from '../components/ui/Navbar';
import MovieScreen from '../components/MovieScreen';

const AppRouter = () => {
    return (
        <>
        <Navbar />
        <Router>
            <div>    
                <Switch>
                    <Route exact path="/:id" component= { MovieScreen }/>
                    <Route exact path="/" component= { Home }/>
                </Switch>
            </div>
        </Router>
    </>
    );
}
 
export default AppRouter;
 
