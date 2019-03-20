import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Game} from "./game/Game.jsx";
import {Players} from "./components/Players/Players";

class App extends React.Component {

    constructor(props, state) {
        super(props, state);
        this.game = new Game();
    }

    render() {
        return (
            <div className="container">
                <Players/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));