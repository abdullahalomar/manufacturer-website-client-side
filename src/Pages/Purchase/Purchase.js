import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { productId } = useParams();
    const [productItem, setProductItem] = useState({});

    const [reload, setIsReload] = useState(true);

    useEffect(() => {
        const url = `http://localhost:5000/productItem/${productItem}`;
        
        fetch(url)
            .then(response => response.json())
        .then(json => setProductItem(json))
    },[reload])

    return ( 
        <div>this is purchase</div>
    );
};

export default Purchase;