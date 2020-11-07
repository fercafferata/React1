import React from 'react';
import Navbar from '../components/ui/Navbar';
import { BrowserRouter as Router, Switch, Route, link, Link, Redirect } from "react-router-dom";
import MarvelScreen from '../components/marvel/MarvelScreen';
import DcScreen from '../components/dc/DcScreen';
import HeroScreen from '../components/heroes/HeroScreen';

const DashboardRoutes = () => {
    return ( 
        <>
            <Navbar />
            
            <div>    
                <Switch>
                    <Route exact path="/marvel" component= { MarvelScreen }/>
                    <Route exact path="/heroe/:heroeId " component= { HeroScreen }/>
                    <Route exact path="/dc" component= { DcScreen }/>

                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
     );
}
 
export default DashboardRoutes;