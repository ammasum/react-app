import React from 'react';
import Item from './Item';

class UserList extends React.Component {
    state = {
        users: ['Masum', 'Emad']
    }
    onChanged(event) {
        console.log(event.target.value);
    }
    render() {
        return this.state.users.map((user, index) => <Item
            changed={this.onChanged}
            key={index}
            name={user}>Hello Item</Item>);
    }
}

export default UserList;