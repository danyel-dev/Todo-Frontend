import { useEffect, useState } from 'react';
import axios from 'axios';
import List from './List';


const BASE_URL = "http://127.0.0.1:8000/";

export default function UserLists() {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.getItem('token'),
            }
        }

        axios.get(BASE_URL + "list", config)
        .then(response => setLists(response.data))
    }, [])
    
    return (
        <>
            { lists.map(list => <List  key={list.id} name={list.name} items={list.item_set} />) }
        </>
    );    
};
