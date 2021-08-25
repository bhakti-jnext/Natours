/*eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51JRbEXSJhoHB9vBKbAXJGfWYK2APvr1hgZq8zgGTXIECRtPVIo5Q98CQqO2vwKD4D0eNxlNCthjrk8hpMtFtOpmu004FRNWHP5'
);
export const bookTour = async (tourId) => {
  try {
    //1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:5000/api/v1/bookings/checkout-session/${tourId}` //http://127.0.0.1:5000
    );
    // console.log(session);
    //2) Create checkout from + charge creadit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
