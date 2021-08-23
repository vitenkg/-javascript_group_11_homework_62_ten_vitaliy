import './App.css';
import Home from "./Counteiner/Bmw/Bmw";
import Contact from "./Counteiner/Contact/Contact";
import Country from "./Counteiner/Country/Country";
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import Bmw from "./Counteiner/Bmw/Bmw";


const App = () => (
    <div className="Container">
        <div>
            <BrowserRouter>
                <ul>
                    <li><NavLink exact className="Link" to="/">BWM</NavLink></li>
                    <li><NavLink className="Link" to="/country">Countries</NavLink></li>
                    <li><NavLink className="Link" to="/contact">Contact</NavLink></li>

                </ul>

                <Switch>
                    <Route path="/" exact component={Bmw}/>
                    <Route path="/country" component={Country}/>
                    <Route path="/contact" component={Contact}/>
                    <Route render={()=><h1>NotFound</h1>}/>
                </Switch>
        </BrowserRouter>
        </div>
    </div>

)


export default App;
