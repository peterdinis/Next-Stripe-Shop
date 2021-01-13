import styles from '../styles/Eshop.module.css';
import {loadStripe} from '@stripe/react-stripe-js';

export default function eshop() {
    return (
        <div className={styles.container}>
            <h1>Hi I am eshop Route</h1>
        </div>
    )
}