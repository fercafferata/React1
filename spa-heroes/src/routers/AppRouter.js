import React from 'react';
import { BrowserRouter as Router, Switch, Route, link, Link } from "react-router-dom";
import LoginScreen from '../components/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';


// const AppRouter = () => {
//     return (  
//         <Router>
//             <div>
//                 <nav>
//                     <ul>
//                         <li>
//                             <Link to="/">Home</Link>
//                         </li>

//                         <li>
//                             <Link to="/about">About</Link>
//                         </li>

//                         <li>
//                             <Link to="/users">Users</Link>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         </Router>
//     );
// }

//export default AppRouter;

const AppRouter = () => {
    return (
        <Router>
            <div>
                {/* <Navbar /> */}

                <Switch>
                    <Route exact path="/login" component= { LoginScreen }/>

                    <Route path="/" component= { DashboardRoutes }/>

                </Switch>
            </div>
        </Router>
    );
}
 
export default AppRouter;
 
