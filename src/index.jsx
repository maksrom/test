import * as React from 'react';
import * as Redux from 'redux';
import * as ReactDOM from 'react-dom';
import {Game} from "./game/Game.jsx";
import {Players} from "./components/Players/Players";
import {Provider} from "react-redux";
import {players} from "./reducers/playersStore";
import {CreatePlayer} from "./components/CreatePlayer";

const store = Redux.createStore(players);

class App extends React.Component {
    constructor(props, state) {
        super(props, state);
        this.game = new Game();
    }

    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <CreatePlayer/>
                    <Players/>
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));