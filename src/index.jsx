import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from "mobx-react";
import {HashRouter, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {ArticlesStore} from "./mobx-store/ArticlesStore";
import {Footer} from "./components/Footer";
import {Articles} from "./components/Articles";
import {GameComponent} from "./components/GameComponent";
import {Article} from "./components/Article";
import "./index.scss";

class App extends React.Component {
    menu = [
        {name: "Articles", path: '/'},
        {name: "Game", path: '/game'},
    ];

    render() {
        return (
            <Provider articles={new ArticlesStore()}>
                <HashRouter>
                    <div className="container">
                        <Navbar menu={this.menu}/>
                        <Route exact  path="/" component={Articles}/>
                        <Route path="/article/:name" component={Article}/>
                        <Route path="/game" component={GameComponent}/>
                    </div>
                    <Footer/>
                </HashRouter>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));