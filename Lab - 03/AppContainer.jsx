import React, {Component} from 'react';
import Users from './Users';
import AddUser from './AddUser';

export default class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [{
                id: Date.now(),
                name: 'John'
            }]
        }
    }

    addUSer(user) {
        this.setState(state => ({
            users: state.users.concat({id: Date.now(), name: user.name})
        }))
        }

    render() {
        return <div>
            <h2>Users App</h2>
            <AddUser addUSer={user => this.addUSer(user)}/>
            <Users users={this.state.users}/>
        </div>;
    }
}