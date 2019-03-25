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

// const store = Redux.createStore(players);


const userMobxStore = new Users();

class App extends React.Component {
    constructor(props, state) {
        super(props, state);
        this.game = new Game();
    }

    render() {
        return (
            <Provider userMobxStore={userMobxStore}>
                <div className="container">
                    {/*<CreatePlayer/>*/}
                    {/*<DeletePlayer/>*/}
                    <Players/>
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));