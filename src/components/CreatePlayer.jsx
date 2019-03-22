import * as React from 'react';
import {connect} from "react-redux";


class CreatePlayerClass extends React.Component{
    constructor(p, s) {
        super(p, s);

        this.state = {
            name: "AAA"
        };
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <form action="#">
                        <div className="form-group">
                            <label htmlFor="name"
                                   className="form-label">Name: </label>

                            <input type="text"
                                   className="form-control"
                                   id="name"
                                   value={this.state.name}
                                   placeholder="my name"
                                   onChange={(e) =>
                                       this.setState({name: e.target.value})}
                            />
                        </div>

                        <button type="submit"
                                className="btn btn-primary"
                                onClick={() => this.props.add(this.state.name)}
                        >Add</button>

                    </form>
                </div>
            </div>
        )
    }
}

export const CreatePlayer = connect(
    () => ({}),
    (dispach) => ({add: (name) => dispach({type: 'add', item: name})})
)(CreatePlayerClass);

