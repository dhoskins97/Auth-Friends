import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

const Friends = (props) => {
    
    const [ friendsList, setFriendsList ] = useState([{name: `Jack`, id: 1}, {name: `Toby`, id:3}]);

    useEffect(() => {
        axiosWithAuth().get(`http://localhost:5000/api/friends`)
        .then(res => {console.log(res)})
        .catch(err => console.log(err.response))
    });
    
    return (
        <div>
            <h2>Friends</h2>
            {friendsList.map(friend => {
                return <div key={friend.id}>{friend.name}</div>
            })}
        </div>
    );
};

export default Friends;