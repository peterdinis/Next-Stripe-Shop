import {useState} from 'react';
import {productData} from '../data/productData';
import styles from '../styles/Products.module.css';

export default function Product() {
    const [products, setProducts] = useState(productData);

    return (
        <div className={styles.productsList}>
            {products.map((product) => {
                return (
                    <div className='card' style={{width: '18rem'}}>
                        <img className="card-img-top" src={product.img} alt={product.name} />
                        <div className='card-body'>
                             <h6 className='card-title'>{product.name}</h6>
                             <p className='card-text'>
                                 {product.price}
                             </p>
                             <button className={styles.checkout}>
                                 Checkout
                             </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}