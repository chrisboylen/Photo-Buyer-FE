import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Error from "./ErrorMessage";
import styled from "styled-components";
import Head from "next/head";
import formatMoney from "../lib/formatMoney";

const SingleItemStyles = styled.div`
  border-radius: 5px;
  max-width: 1200px;
  margin: 1rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  h2 {
    background: ${props => props.theme.blue};
    border-radius: 5px 5px 0 0;
    color: ${props => props.theme.white};
    text-align: center;
    margin: 0;
    span {
      color: #c7e4ff;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 0 0 5px 5px;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      largeImage
    }
  }
`;
class SingleItem extends Component {
  render() {
    return (
      <Query
        query={SINGLE_ITEM_QUERY}
        variables={{
          id: this.props.id
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.item) return <p>No Item Found for {this.props.id}</p>;
          const item = data.item;
          return (
            <SingleItemStyles>
              <Head>
                <title>Photo Buyer | {item.title}</title>
              </Head>
              <div className="details">
                <h2>
                  <span>Viewing: </span> {item.title}
                </h2>
                <img src={item.largeImage} alt={item.title} />
                <p>{item.description}</p>
              </div>
            </SingleItemStyles>
          );
        }}
      </Query>
    );
  }
}

export default SingleItem;
export { SINGLE_ITEM_QUERY };
