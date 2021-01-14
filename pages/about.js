import styles from '../styles/About.module.css';

export default function about() {
    return (
        <div className={styles.info}>
            <h1 className={styles.heading}>Next.js Stripe payments</h1>
            <span className={styles.appInfo}>
                <p>Simple payment app in next.js</p>
                <button className={styles.button}>
                    <a className={styles.link} href='https://github.com/peterdinis/Next-Stripe-Shop'>
                        Source Code
                    </a>
                </button>
            </span>
        </div>
    )
}