// /* eslint-disable */
// import axios from 'axios';
// import { showAlert } from './alerts';
// import { loadStripe } from '@stripe/stripe-js';

// export const bookTour = async (tourId) => {
//   const Stripe = require('stripe');

//   const stripe = Stripe(
//     'pk_test_51Nf7xqEliCUtOefHZxmCDA14QnTYi9mYqg4aLuvzGY6i1PyZVlIGfOpWBp0hYNhsJuKV6DqQkwkf96tDyaPieB4s00E6ngowAj',
//   );

//   try {
//     // 1) Get Checkout session
//     const response = await axios.get(
//       `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`,
//     );
//     const session = response.data.session;

//     // 2) Redirect to checkout form
//     await stripe.redirectToCheckout({
//       sessionId: session.id,
//     });
//   } catch (err) {
//     console.log(err);
//     showAlert('error');
//   }
// };

/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51Nf7xqEliCUtOefHZxmCDA14QnTYi9mYqg4aLuvzGY6i1PyZVlIGfOpWBp0hYNhsJuKV6DqQkwkf96tDyaPieB4s00E6ngowAj',
  );
  try {
    //1.get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`,
    );
    console.log(session);
    //2. create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
