import React from "react"
import {loadStripe} from '@stripe/stripe-js'
import {graphql} from 'gatsby';

const stripePromise = loadStripe('pk_test_51KZ7YaJ37P00vqboF02cNpMcsuIxWVU7Init1zAe0PHguZbEZQNV9cQYlg3BdbhOIKXXHCmNrx8OwEV12oJU8ahn00CDhGhBK5')

export default function Home({data}) {
const {prices} = data;
console.log("data =", prices);
const redirectToCheckout =  async(id) => {
  const stripe = await stripePromise;
  await stripe.redirectToCheckout({
    mode: "payment",
    lineItems: [
      {
        price: id,
        quantity: 3
      }
    ],
    successUrl: `http://localhost:8000/payment-success`,
    cancelUrl: `http://localhost:8000/payment-success`
  })
}
  return (
      <div>
        <div>Hello world!</div>
        {
          prices?.edges.map(({node}) => (
            <div key={node.id}>
              <h1>{node?.product?.name}</h1>
              <img width="200px"alt={node.product.name} src={node.product.images[0]} />
              <h3>{node.unit_amount}</h3>
        <button onClick={() => redirectToCheckout(node.id)}>Checkout</button>
            </div>
          ))
        }
      </div>
    )
}


export const query = graphql`
{
  prices: allStripePrice {
    edges {
      node {
        product {
          name
          images
          description
        }
        id
        unit_amount
      }
    }
  }
}
`;