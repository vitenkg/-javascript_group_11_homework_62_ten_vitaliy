import './App.css';
import Home from "./Counteiner/Bmw/Bmw";
import Contact from "./Counteiner/Contact/Contact";
import Country from "./Counteiner/Country/Country";
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import Bmw from "./Counteiner/Bmw/Bmw";
import Chat from "./Counteiner/Chat/Chat";


const App = () => (
    <div className="Container">
        <div>
            <BrowserRouter>
                <ul>
                    <li><NavLink exact className="Link" to="/">BWM</NavLink></li>
                    <li><NavLink className="Link" to="/country">Countries</NavLink></li>
                    <li><NavLink className="Link" to="/chat">Chat</NavLink></li>

                </ul>

                <Switch>
                    <Route path="/" exact component={Bmw}/>
                    <Route path="/country" component={Country}/>
                    <Route path="/chat" component={Chat}/>
                    <Route render={()=><h1>NotFound</h1>}/>
                </Switch>
        </BrowserRouter>
        </div>
    </div>

)


export default App;
