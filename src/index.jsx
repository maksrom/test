import * as React from 'react';
import * as Redux from 'redux';
import * as ReactDOM from 'react-dom';
import {Game} from "./game/Game.jsx";
import {Players} from "./components/Players/Players";
// import {Provider} from "react-redux";
import {Provider} from "mobx-react";
import {players} from "./reducers/playersStore";
import {CreatePlayer} from "./components/CreatePlayer";
import {DeletePlayer} from "./components/Players/DeletePlayer";
import {Users} from "./mobx-store/Users";
import {Score} from "./mobx-store/Score";
import {CreateUser} from "./components/Players/CreateUser";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {PlayersPage} from "./components/PlayersPage";
import {HashRouter} from 'react-router-dom'

// const store = Redux.createStore(players);

class App extends React.Component {
    constructor(props, state) {
        super(props, state);
        this.game = new Game();
    }

    render() {
        return (
            <Provider users={new Users()}
                        score={new Score()}>
                <HashRouter>
                    <Link to="/players">Players</Link>
                    <br/>
                    <Link to="/123">123</Link>
                    <Route path="/players" component={PlayersPage}/>
                    <Route path="/123" component={CreatePlayer}/>
                </HashRouter>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));