
import {Map, Placemark, YMaps} from '@pbe/react-yandex-maps';
import React, { useEffect, useState } from 'react';


const Mapp = ({ apiKey }) => {
    const [map, setMap] = useState(null);
    const [shops, setShops] = useState([]);
    const [newShop, setNewShop] = useState({
        name: '',
        lat: null,
        lng: null,
        address: '',
    });
    const [newLocation, setNewLocation] = useState('');
    useEffect(() => {
        async function LoadShops() {
            try {
                const response = await fetch('/api/getShops');
                response?.text().then(v=>{

                    setShops(JSON.parse(v))
                })

            } catch (error) {
                console.error('Ошибка при загрузке магазинов:', error);
            }
        }
        LoadShops()
    }, []);

    console.log(shops)
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewShop({
            ...newShop,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!coordinate)
            return
        const location = {
            name:e.target[0].value,
            lat : coordinate[0],
            lng : coordinate[1]
        }
        addShop(location);

    };

    const addShop = async (shop) => {
        try {
            const response = await fetch('/api/Shops', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(shop),
            });

            setCoordinate(null)
                setShops([...shops, shop]);
        } catch (error) {
            console.error('Ошибка при добавлении зоо магазина:', error);
        }
    };


    const [coordinate, setCoordinate] = useState(null)
    return (
        <div>
            <YMaps  query={{ apikey: 'c8e6b5c9-a3f4-4661-b3cf-19a98a30f154' }}>
                <div style={{height:'400px', width:'1000px', paddingLeft:'200px'}}>
                    <Map width="100%" height="100%"
                         onClick={(e) => {
                             const coords = e.get("coords");
                             console.log(coords)
                             setCoordinate(coords);
                         }}
                         state={{center: [55.751574, 37.573856], zoom: 13}}>
                        {shops.map(shop=> <Placemark key={JSON.stringify([shop.lat, shop.lng])} geometry={[shop.lat, shop.lng]}/>)}
                        {coordinate&&<Placemark geometry={coordinate} pinColor='#FFfff0'/>}
                    </Map>
                </div>
            </YMaps>

            <form style={{paddingTop:'50px', paddingLeft:'400px'}} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Название" value={newShop.name} onChange={handleInputChange}
                   required/>
            <button type="submit">Добавить зоо магазин</button>
        </form>
</div>
)
    ;
};

export default Mapp;