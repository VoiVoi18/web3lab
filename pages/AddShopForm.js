import React, { useState } from 'react';
import axios from 'axios';

const AddShopForm = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/Shops', { name, location });
            alert('Зоо магазин добавлен!');
            setName(name);
            setLocation(location);
        } catch (error) {
            console.error('Ошибка при добавлении зоо магазина:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Название магазина:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <label>
                Местоположение магазина:
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Добавить зоо магазин</button>
        </form>
    );
};

export default AddShopForm;