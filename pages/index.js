import Head from 'next/head'
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm';
import styles from '../styles/Home.module.css';

const stripePromiseKey = loadStripe('pk_test_51I9UfeADWoS2rxjhz0dvApq8lDOJnebemWODbL5ZUniO2nKo2cZOAaHBCghfTwIGhpy9nUQLKML4vhz1Kwd2xXu600sDWAphHL');

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Stripe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Elements stripe={stripePromiseKey} >
          <CheckoutForm />
      </Elements>
    </div>
  )
}
