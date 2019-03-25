import * as React from 'react';
import {Game} from "../game/Game";

const rootElement = document.createElement('div');
const gameComponent = new Game(rootElement);

export class GameComponent extends React.Component {

    componentDidMount() {
        this.div.appendChild(rootElement);
    }

    componentWillUnmount() {
        this.div.removeChild(rootElement);
    }

    render() {
        return(
            <div ref={(div) => {this.div = div}}/>);
    }
}