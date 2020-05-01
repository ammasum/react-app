import React from 'react';

class UserList extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} />
            </div>
        );
    }
}

export default UserList;