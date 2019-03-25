import * as React from 'react';
import {inject, observer} from "mobx-react";
import {Link} from "react-router-dom";

@inject('articles')
@observer
export class Articles extends React.Component {

    constructor(p, s) {
        super(p, s);

        this.props.articles.load();
    }

    render() {
        return (

            <div>
                <header className="jumbotron my-4">
                    <h1 className="display-3">Articles</h1>
                </header>


                <div className="row text-center">

                    {this.props.articles.list.map((article, index) => {
                        return(
                            <div className="col-lg-3 col-md-6 mb-4" key={index}>
                                <div className="card h-50">
                                    <img className="card-img-top" src="http://placehold.it/500x325"/>
                                    <div className="card-body">
                                        <h4 className="card-title"><Link to={`/article/${index}`}>{article.name}</Link></h4>
                                        <p className="card-text">123</p>
                                    </div>
                                    {/*<div className="card-footer">*/}
                                        {/*<a href="#" className="btn btn-primary">Find Out More!</a>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        );
    }
}