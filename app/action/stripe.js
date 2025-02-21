"use server";

import { headers } from "next/headers";
const CURRENCY = "usd";
import { formatAmountForStripe } from "../../swift-shop/stripe/strip-helper";
import { stripe } from "../../swift-shop/stripe/stripe";

export async function createCheckoutSession(data) {
  const ui_mode = "hosted";
  const origin = headers().get("origin");
  const deliveryInfo = data.deliveryInfo

  console.log(deliveryInfo) 

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    submit_type: "auto",
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: CURRENCY,

          product_data: {
            name: data.name,
          },

          unit_amount: formatAmountForStripe(data.amount, CURRENCY),
        },
      },
    ],

    ...(ui_mode === "hosted" && {
      success_url: `${origin}/payment-success?session_id={CHECKOUT_SESSION_ID}&deliveryInfo=${deliveryInfo}`,

      cancel_url: `${origin}/products`,
    }),

    ui_mode,
  });

  return {
    client_secret: checkoutSession.client_secret,

    url: checkoutSession.url,
  };
}

export async function createPaymentIntent(data) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: formatAmountForStripe(
      1000,

      CURRENCY
    ),

    automatic_payment_methods: { enabled: true },

    currency: CURRENCY,
  });

  return { client_secret: paymentIntent.client_secret };
}
