import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import styles from '../styles/CheckoutForm.module.css';

export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();

    const handlePaySubmit = async (e) => {
        e.preventDefault();

        const [error, paymentMethod] = stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        });

        if(!error) {
            console.log(paymentMethod)
        }
    }

    // https://dashboard.stripe.com/test/dashboard

    return (
        <div className={styles.paymentForm}>
            <form onSubmit={handlePaySubmit}>
                <h2 className={styles.header}>Price: 6€</h2>
                <img className={styles.tshirt} src='https://mockup-api.teespring.com/v3/image/N_lzOWHSYHVOeVAgT0B31wcGvEU/480/560.jpg' alt='Tshirt-Image' />
                <CardElement />
                    <button type='submit' disabled={stripe} className={styles.payment}>
                            Pay
                    </button>
             </form>
        </div>
    )
}