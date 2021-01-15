import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51I9UfeADWoS2rxjhYWWFyFUVaooKwmBY8vcbvk1kSi2d2pbTEyR5X8hfoGuPdLkzOR3L0Wyulqr8PEV7MHYV4z43007a0uwTst');

export default async (req, res) => {
    const { id, amount } = req.body;
  
    try {
      const payment = await stripe.paymentIntents.create({
        amount,
        currency: "EUR",
        description: "Next.js Tshirt",
        payment_method: id,
        confirm: true
      });
  
      console.log(payment);
  
      return res.status(200).json({
        confirm: "Payment was successfull"
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: error.message,
        confirm: "Your payment failed"
      });
    }
  };