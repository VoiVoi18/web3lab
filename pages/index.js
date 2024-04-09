import React, { useEffect, useState } from 'react';
import Mapp from './Map';
import axios from 'axios';

export default function Home() {
    const apiKey = 'c8e6b5c9-a3f4-4661-b3cf-19a98a30f154';
    const [Shops, setShops] = useState([]);

    useEffect(() => {
        const fetchShops = async () => {
            try {
                const response = await axios.get('/api/Shops');
                setShops(response.data);
            } catch (error) {
                console.error('Ошибка при загрузке данных о магазинах:', error);
            }
        };
        fetchShops();
    }, []);

    return (
        <div>
            <h1 style={{paddingLeft:'400px'}}>Зоо Магазины</h1>
            <Mapp apiKey={apiKey} Shops={Shops}/>
        </div>
    );
}