import React, {
    useEffect,
    useState
} from 'react';


const useProducts = (count = 0) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (count) {
            fetch('https://pure-spire-01471.herokuapp.com/product')
                .then(response => response.json())
                .then(json => setProducts(json.slice(0, count)))
        } else {
            fetch('products.json')
                .then(response => response.json())
                .then(json => setProducts(json.slice()))
        }

    }, [])

    return [products, setProducts];
}

export default useProducts;