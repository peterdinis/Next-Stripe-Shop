import Head from 'next/head'
import styles from '../styles/Home.module.css';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'

const stripePromiseKey = loadStripe(process.env.STRIPE_PUBLIC_KEY);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Elements stripe={stripePromiseKey} className={styles.main}>
          <h1>test</h1>
      </Elements>
    </div>
  )
}
