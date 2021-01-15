import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import styles from '../styles/CheckoutForm.module.css';
import axios from 'axios';
import ProductsList from './ProductsList';

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
                <ProductsList />
                <CardElement />
                    <button type='submit' disabled={!stripe} className={styles.payment}>
                            Pay
                    </button>
             </form>
        </div>
    )
}