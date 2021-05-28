import React, { useEffect, useState } from 'react';
import axios from 'axios';

const User = (props) => {
    const userParam = props.match.params.users;

    const [user, setUser] = useState();

    useEffect(async () => {
        const url = 'https://api.github.com/users/' + userParam;
        const results = axios.get(url)
                            .then(result => {
                                setUser(result.data);
                            })
                            .catch(err => console.log(err.response));
                        }
    , []);
    return (
        <div>
            <h1>User Information</h1>
            <table border="1">
            <tr>
                <th>ID</th>
                <th>Username</th>
            </tr>
            <tr>
                <td>{user ? user.id : null}</td>
                <td>{user ? user.login : null}</td>
            </tr>
        </table>
        </div>
    )
}

export default User;