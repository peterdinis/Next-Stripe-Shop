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
                    <h2>ReactJs Tshirt</h2>
                    <img src='https://m.media-amazon.com/images/I/A13usaonutL._AC_CLa%7C2140%2C2000%7C71kevjBxElL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UX342_.png' className={styles.tshirt} />
                <CardElement />
                    <button type='submit' disabled={!stripe} className={styles.payment}>
                            Pay
                    </button>
             </form>
        </div>
    )
}