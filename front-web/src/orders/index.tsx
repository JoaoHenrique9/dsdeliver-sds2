import { useEffect, useState } from 'react';
import './styles.css';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { OrderLocationData, Product } from './types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';

function Orders() {
    const[products,setProducts]  = useState<Product[]>([]);
    const [orderLocation, setorderLocation] = useState<OrderLocationData>();
    useEffect(() =>{
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error)) 
    },[])
    return (
        <div className="orders-continer">
            <StepsHeader />
            <ProductsList  products={products}/>
            <OrderLocation onChangeLocation={location => setorderLocation(location)}  />
        </div>
    )
}

export default Orders;