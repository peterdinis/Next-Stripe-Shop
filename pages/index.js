import Head from 'next/head'
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm';
import styles from '../styles/Home.module.css';
import {useState} from 'react';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductsList';

const stripePromiseKey = loadStripe('pk_test_51I9UfeADWoS2rxjhz0dvApq8lDOJnebemWODbL5ZUniO2nKo2cZOAaHBCghfTwIGhpy9nUQLKML4vhz1Kwd2xXu600sDWAphHL');

export default function Home() {
  const [paymentStatus, setPaymentStatus] = useState('ready');

  if(paymentStatus === 'success') {
      <div>
        <h2 className={styles.success}>Your payment was successfull</h2>
      </div>
  } else {
    <div>
      <h2 className={styles.error}>Something went wrong</h2>
    </div>
  }

  const toggledPaymentStatus = () => {
    setPaymentStatus('success');
  }

  return (
    <div>
       <Navbar />
      <div className={styles.container}>
        <Head>
          <title>Next Stripe</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"></link>
        </Head>

        <ProductList />

        {/* <Elements stripe={stripePromiseKey} >
            <CheckoutForm success={toggledPaymentStatus} />
        </Elements> */}
      </div>
    </div>

  )
}
