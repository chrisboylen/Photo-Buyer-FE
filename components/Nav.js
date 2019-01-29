import React, { Component } from "react";
import Link from "next/link";
import { NavStyles, MobileStyles } from "./styles/NavStyles";
import User from "./User";
import Signout from "./Signout";
import { Mutation } from "react-apollo";
import { TOGGLE_CART_MUTATION } from "./Cart";
import CartCount from "./CartCount";
import Menu from "./Menu";

class Nav extends Component {
  state = {
    isOpen: false
  };

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <User>
        {({ data: { me } }) => (
          <NavStyles data-test="nav">
            {this.state.isOpen && (
              <Menu isOpen={this.state.isOpen} toggleMenu={this.toggleMenu} />
            )}
            <button
              onClick={this.toggleMenu}
              className="mobile-checkbox"
              id="mobile-toggle"
            />
            <label htmlFor="mobile-toggle" className="mobile-btn">
              <span
                className={
                  this.state.isOpen
                    ? "mobile-icon mobile-icon-open"
                    : "mobile-icon"
                }
              >
                &nbsp;
              </span>
            </label>
            <div className="mobile-bkg">&nbsp;</div>
            <div className="web-nav">
              <Link href="/items">
                <a>Shop</a>
              </Link>
              {me && (
                <>
                  <Link href="/sell">
                    <a>Sell</a>
                  </Link>
                  <Link href="/orders">
                    <a>Orders</a>
                  </Link>
                  <Signout />
                  <Mutation mutation={TOGGLE_CART_MUTATION}>
                    {toggleCart => (
                      <button onClick={toggleCart}>
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
                    <a>Signup</a>
                  </Link>
                  <Link href="/signin">
                    <a>Signin</a>
                  </Link>
                </>
              )}
            </div>
          </NavStyles>
        )}
      </User>
    );
  }
}

export default Nav;
