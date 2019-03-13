import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TodoItem } from './components/TodoItem.jsx';
import {Game} from "./game/Game.jsx";

class App extends React.Component {

    constructor(props, state) {
        super(props, state);

        this.game = new Game();

        this.state = {
            list: [
                { name: 'aaaa', color: 'red' },
                { name: 'bbbb', color: 'green', bold: true },
            ]
        };
    }

    render() {
        return (
            <div>

                <input type="text" onChange={(e) =>  this.storeData(e.target.value)}/>

                <button onClick={() => this.playGame()}>Play</button>
                <button onClick={() => this.newColor()}>new color</button>
                <button onClick={() => this.addItem()}>Add</button>
                <ul>
                    {this.state.list.map((item, i) => (
                        <TodoItem key={i}
                                  name={item.name}
                                  color={item.color}
                                  bold={item.bold}
                                  onRemove={() => this.removeItem(i)}/>
                    ))}
                </ul>
            </div>
        )
    }

    storeData(value) {
        window.localStorage.setItem('userName', value);
    }

    playGame() {

    }

    newColor() {
        // this.game.changeColor();
    }

    addItem() {
        this.setState({list: [
            ...this.state.list,
            {name: 'cccc', color: 'pink'}
        ]});
    }

    removeItem(i) {
        this.state.list.splice(i, 1);
        this.setState({list: [...this.state.list]})
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));