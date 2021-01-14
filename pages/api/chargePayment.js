import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
    const {id, ammount} = req.body;

    // charging the cart
    try {
        const payment = await stripe.paymentsIntents.create({
            amount,
            currency: 'EUR',
            description: 'Nextjs Tshirt',
            paymentMethod: id
            
        })

    } catch (err) {

    }
}