import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Checkout from './Checkout';
git 
const stripePromise = loadStripe('pk_test_51L4nDXHVq2tijB0uqTOvnvsP5BR3cRfeitMfI0ggJIcu460AQFEkMTJS8XB8GLrOavSVA95y2ASg5Vr8vgggZ3R700BxVPLawK');
const Payment = (order) => {
    const options = {
        // passing the client secret obtained from the server
        clientSecret: '{{sk_test_51L4nDXHVq2tijB0ufyikt3W3SE1m7EpX3GF574DgC3Rx4YfxCAJfj44L3jTCfb1UVsHx5l5BPgT0LFDl9cSvItrF00vJdjNnbb}}',
      };
      return (
        <Elements stripe={stripePromise} options={options}>
          <Checkout/>
        </Elements>
      );
};

export default Payment;