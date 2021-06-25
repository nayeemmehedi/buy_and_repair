import React from 'react';
import { useHistory } from 'react-router';
import Dropdown from './Dropdown';

const Tablebody = ({ newdata }) => {

    const history = useHistory()

    const handleclick = () => {

        fetch(`http://localhost:4540/delete/${newdata._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                alert('successfully deleted')
                history.replace('/')

            })



    }

    const { userName, userEmail, eventName} = newdata


    return (
        <tr>
            <th scope="row">{userName}</th>
            <td>{userEmail}</td>
            <td>{eventName}</td>
           
            <td><button onClick={handleclick}>Delete</button></td>
            <td><Dropdown></Dropdown></td>
        </tr>
    );
};

export default Tablebody;