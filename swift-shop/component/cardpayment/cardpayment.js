'use client'
import StripeCheckout from 'react-stripe-checkout'


const Cardpayment = () => {
    const price = 10
    const handlePayment = async(token)=>{
        
    }
  return (
    <div>
      <StripeCheckout
        token={handlePayment}
        stripeKey="pk_test_51QuOSNRqCrpGFFlIFHCSKUgLQLpiCESBPKhcbR58Avisok55BWq51YI8KoGJTvR38TI41rns8CcnVhhrFZXNLZia00eKjkNJfD"
        amount={price*100}
        label='Pay Now'
        name='Swift Shop'
      />
    </div>
  )
}

export default Cardpayment
