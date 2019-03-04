import React from 'react';

const User = props => {
    const {user} = props;
    return <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
    </tr>
};

export default User;