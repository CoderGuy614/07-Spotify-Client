import React from "react";
import { StripeProvider, Elements } from "react-stripe-elements";

import "../styles/paywall.css";
import Stripe from "./Stripe";

class Paywall extends React.Component {
  state = {
    message: ""
  };
  getStripeMessage = msg => {
    this.setState({ message: msg });
  };
  componentDidUpdate = () => {
    if (this.state.message == "success") {
      setTimeout(this.props.closePaywall, 2000);
    }
  };
  render() {
    return (
      <div id="paywall" className={this.props.paywallOpen ? "open" : ""}>
        <div id="card">
          <i
            id="close"
            className="fas fa-fw fa-times"
            onClick={() => this.props.closePaywall()}
          ></i>
          <h2>Upgrade to Premium</h2>
          <StripeProvider apiKey="pk_test_Lujy9JAzF8Ate9R5xFZiJT4X007sudUFX4">
            <Elements>
              <Stripe getStripeMessage={this.getStripeMessage} />
            </Elements>
          </StripeProvider>
        </div>
      </div>
    );
  }
}

export default Paywall;
