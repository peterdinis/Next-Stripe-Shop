import {useState} from 'react';
import {productData} from '../data/productData';
import styles from '../styles/Products.module.css';

export default function Product() {
    const [products, setProducts] = useState(productData);

    return (
        <div>
            {products.map((product) => {
                return (
                    <div>
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                        <img className={styles.tshirts} src={product.img} />
                    </div>
                )
            })}
        </div>
    )
}