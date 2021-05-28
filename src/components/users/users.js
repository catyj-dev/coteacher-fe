import React from 'react';
import {Link} from 'react-router-dom';

const Users = (props) => {
    const users = props.users;
    
    const userData = users ? users.map((user,i) => {
        return (<tr key={i}>
            <td>{user.id}</td>
            <td><Link to={user.login}>{user.login}</Link></td>
        </tr>);
    }) : null;

    return (
        <div>
            <h1>CoTeacher FrontEnd TakeHome Project</h1>
            <table border="1">
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                </tr>
                {userData}
            </table>
        </div>

    );
}

export default Users;