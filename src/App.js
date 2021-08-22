import './App.css';
import Home from "./Component/Counteiner/Home/Home";
import AboutUs from "./Component/Counteiner/AboutUs/AboutUs";
import Contact from "./Component/Counteiner/Contact/Contact";
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";

const App = () => (
    <div className="Container">
        <div>
            <BrowserRouter>
                <ul>
                    <li><NavLink exact className="Link" to="/">Home</NavLink></li>
                    <li><NavLink className="Link" to="/aboutus">About US</NavLink></li>
                    <li><NavLink className="Link" to="/contact">Contact</NavLink></li>

                </ul>

                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/aboutus" component={AboutUs}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
        </BrowserRouter>
        </div>
    </div>

)


export default App;
