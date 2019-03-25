import * as React from 'react';
import {connect} from 'react-redux';


export class DeletePlayerComponent extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.del()}>Delete</button>
            </div>
        )

    }
}

// export const DeletePlayer = connect(
//     () => ({}) ,
//     (dispach) => ({
//         del: () => dispach({
//             type: 'delete'
//         })
//     })
// )(DeletePlayerComponent);