import { useState, useEffect } from 'react';

interface Cat {
    id: string;
    url: string;
    width: number;
    height: number;
}

function createCatElement(cat: Cat) {
    return (
        <img
        key={cat.id} 
        src={cat.url}
        alt="Cat"
        className='w-64 h-64 object-cover rounded-xl shadow m-3' />);
}

export function CatGallery() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search?limit=10')
            .then(res => res.json())
            .then(data => setCats(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {cats.map(createCatElement)}
        </div>
    );
}