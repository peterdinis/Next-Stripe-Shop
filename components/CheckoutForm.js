import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import styles from '../styles/CheckoutForm.module.css';

export default function CheckoutForm() {
    const stripe = useStripe();
    return (
        <div className={styles.paymentForm}>
            <form>
                <CardElement />
                    <button disabled={stripe} className={styles.payment}>
                            Pay
                    </button>
             </form>
        </div>
    )
}