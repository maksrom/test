import * as React from 'react';
import {inject, observer} from "mobx-react";

@inject('articles')
@observer
export class Article extends React.Component {
    constructor(p, s) {
        super(p, s);

        const name = this.props.match.params.name;
        this.props.articles.loadByName(name);
    }

    render() {
        return(
            <div className="row">

                <div className="col-lg-8">
                    <h1 className="mt-4">{this.props.articles.article ? this.props.articles.article.name : ''}</h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p>
                </div>
            </div>
        );
    }
}