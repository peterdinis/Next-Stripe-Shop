import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import styles from '../styles/CheckoutForm.module.css';
import axios from 'axios';

export default function CheckoutForm({success}) {
    const stripe = useStripe();
    const elements = useElements();


    const handlePaySubmit = async e => {
        e.preventDefault();

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        });

        if(!error) {
            const { id } = paymentMethod;

            try {
                const {data} = await axios.post('/api/chargePayment',  {id, amount: 1000});
                console.log(data);
                success();
            } catch(e) {
                console.error(e);
            }
        }
    }

    // https://dashboard.stripe.com/test/dashboard

    return (
        <div className={styles.paymentForm}>
            <form onSubmit={handlePaySubmit}>
                <h2 className={styles.header}>Next.js Tshirt</h2>
                <h4 className={styles.price}>Price: 3€</h4>
                <img className={styles.tshirt} src='https://mockup-api.teespring.com/v3/image/N_lzOWHSYHVOeVAgT0B31wcGvEU/480/560.jpg' alt='Tshirt-Image' />
                <CardElement />
                    <button type='submit' disabled={!stripe} className={styles.payment}>
                            Pay
                    </button>
             </form>
        </div>
    )
}