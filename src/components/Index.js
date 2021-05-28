import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Users from './users/users';
import User from './users/user/user.js';

const Index = () => {
   
    const [data, setData] = useState();

    useEffect(async () => {
        console.log('here');
        const url = 'https://api.github.com/users';
        const results = axios.get(url)
                            .then(result => {
                                if(result.status == 200) {
                                    const apiResults = result.data;
                                    setData(apiResults)
                                }
                            })
                            .catch(err => console.log(err.response));
    }, []);

    return (
            <Users users={data} />
    );
}

export default Index;