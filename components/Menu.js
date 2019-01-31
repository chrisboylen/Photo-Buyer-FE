import React, { Component } from "react";
import Link from "next/link";
import { MobileStyles } from "./styles/NavStyles";
import User from "../components/User";
import Signout from "./Signout";
import { Mutation } from "react-apollo";
import { TOGGLE_CART_MUTATION } from "./Cart";
import CartCount from "./CartCount";
import PropTypes from "prop-types";

class Menu extends Component {
  render() {
    return (
      <User>
        {({ data: { me } }) => (
          <MobileStyles data-test="mobile">
            <Link href="/items">
              <a data-test="items" onClick={this.props.toggleMenu}>
                Shop
              </a>
            </Link>
            {me && (
              <>
                <Link href="/sell">
                  <a onClick={this.props.toggleMenu}>Sell</a>
                </Link>
                <Link href="/orders">
                  <a onClick={this.props.toggleMenu}>Orders</a>
                </Link>
                <Signout />
                <Mutation mutation={TOGGLE_CART_MUTATION}>
                  {toggleCart => (
                    <button onClick={toggleCart} data-test="signout">
                      My Cart
                      <CartCount
                        count={me.cart.reduce(
                          (tally, cartItem) => tally + cartItem.quantity,
                          0
                        )}
                      />
                    </button>
                  )}
                </Mutation>
              </>
            )}
            {!me && (
              <>
                <Link href="/signup">
                  <a onClick={this.props.toggleMenu}>Signup</a>
                </Link>
                <Link href="/signin">
                  <a onClick={this.props.toggleMenu}>Signin</a>
                </Link>
              </>
            )}
          </MobileStyles>
        )}
      </User>
    );
  }
}

Menu.propTypes = {};

export default Menu;
